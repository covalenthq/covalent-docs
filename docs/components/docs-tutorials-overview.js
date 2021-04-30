import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import TimeAgo from "react-timeago";
import "../css/components/content-table.css"

import getPageTitle from "../utils/get-page-title"

const tenDaysInMS = 10 * 24 * 60 * 60 * 1000;

const DocsTutorialsData = props => {
  const query = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              order
              title
              demo
              tags
              updated
              type
              author
            }
            headings(depth: h1) {
              value
            }
            wordCount {
              words
            }
            parent {
              ... on File {
                modifiedTime(formatString: "YYYY-MM-DD")
              }
            }
          }
        }
      }
    }
  `)

  const tutorials = query.allMdx.edges
    .map(({ node }) => node)
    .filter(page => page.fields.slug.match(/^\/learn\/tutorials\/.+/))
    .map(page => ({
      order: page.frontmatter.order,
      title: getPageTitle(page),
      url: page.fields.slug,
      tags: page.frontmatter.tags,
      demo: page.frontmatter.demo,
      updated: page.parent.modifiedTime,
      type: page.frontmatter.type,
      author: page.frontmatter.author,
      wordCount: page.wordCount.words,
      new: (+new Date() - +new Date(page.frontmatter.updated)) < tenDaysInMS
    }))
    .sort((a, b) => +new Date(b.updated) - +new Date(a.updated))
    .sort((a, b) => a.order - b.order)

  let i = 0
  let longestWordCount = 0

  for (i = 0; i < tutorials.length; i += 1) {
    if (tutorials[i].wordCount > longestWordCount) {
      longestWordCount = tutorials[i].wordCount
    }
  }

  for (i = 0; i < tutorials.length; i += 1) {
    tutorials[i].length = ((tutorials[i].wordCount / longestWordCount) * 100) + "%"
  }

  const tagsSet = new Set()
  tutorials.forEach(ex => {
    ex.tags.forEach(tag => tagsSet.add(tag))
  })

  const tags = Array.from(tagsSet)
  tags.unshift("All tutorials")

  return props.children({ tutorials, tags })
}

class DocsTutorialsOverview extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      activeTag: "All tutorials"
    }
  }

  render() {
    const activeTag = this.state.activeTag

    return (
      <DocsTutorialsData>
        {({ tutorials, tags }) => (
          <>
            <div className="TagsFilter">
              {tags.map(tag => (
                <button
                  key={tag}
                  className={
                    `Button TagsFilter--button${
                      tag !== activeTag ? "" :
                        " Button-is-docs-primary TagsFilter--button-active"
                    }`
                  }
                  onClick={() => {
                    this.setState({
                      activeTag: tag
                    })
                  }}
                  children={tag}/>
              ))}
            </div>

            <div className="DocsTutorials">
                <div className="DocsTutorials--header">
                    <div className="DocsTutorials--row">
                        <div className="DocsTutorials--column" data-column="title">
                            <span className="DocsTutorials--column-text">Tutorial</span>
                        </div>
                        <div className="DocsTutorials--column" data-column="author">
                            <span className="DocsTutorials--column-text">Author</span>
                        </div>
                        <div className="DocsTutorials--column" data-column="updated">
                            <span className="DocsTutorials--column-text">Updated</span>
                        </div>
                        <div className="DocsTutorials--column" data-column="type">
                            <span className="DocsTutorials--column-text">Type</span>
                        </div>
                        <div className="DocsTutorials--column" data-column="length">
                            <span className="DocsTutorials--column-text">Length</span>
                        </div>
                    </div>
                </div>
                <div className="DocsTutorials--body">
                    {tutorials
                        .filter(ex =>
                        activeTag === "All tutorials" ?
                            true :
                            ex.tags.indexOf(activeTag) >= 0
                        )
                        .map((tutorial, i) => (
                        <div key={tutorial.url} className={"DocsTutorials--row" + (tutorial.new ? " DocsTutorials--row-is-new" : "")}>
                            <div className="DocsTutorials--column" data-column="title">
                                <Link className="Link" to={tutorial.url}>
                                    {tutorial.title}
                                </Link>
                            </div>
                            <div className="DocsTutorials--column" data-column="author">
                                <Link className="Link" to={"https://github.com/" + (tutorial.author)}>
                                    {tutorial.author}
                                </Link>
                            </div>
                            <div className="DocsTutorials--column" data-column="updated">
                                <TimeAgo date={tutorial.updated} formatter={(value, unit) => (
                                    <React.Fragment>
                                        {value} {unit}{value > 1 ? "s" : ""}<span className="DocsTutorials--ago-text"> ago</span>
                                    </React.Fragment>
                                )} minPeriod={60} />
                            </div>
                            <div className="DocsTutorials--column" data-column="type">{tutorial.type}</div>
                            <div className="DocsTutorials--column" data-column="length">
                                <div className="DocsTutorials--length-bar">
                                    <div className="DocsTutorials--length-bar-inner" style={{ width: tutorial.length }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </>
        )}
      </DocsTutorialsData>
    )
  }
}

export default DocsTutorialsOverview
