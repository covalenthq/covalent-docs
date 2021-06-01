import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import {Card, CardTitle, CardText, CardSubtitle, CardBody, CardBody } from 'reactstrap'


import getPageTitle from "../utils/get-page-title"

const tenDaysInMS = 10 * 24 * 60 * 60 * 1000;

const DocsProjectsData = props => {
  const query = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              order
              tags
              description
              updated
              author
              featuredImage {
                childImageSharp {
                  fluid(width:600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            headings(depth: h1) {
              value
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
  
  const projects = query.allMdx.edges
    .map(({ node }) => node)
    .filter(page => page.fields.slug.match(/^\/project-showcase\/.+/))
    .map(page => ({
      order: page.frontmatter.order,
      title: getPageTitle(page),
      url: page.fields.slug,
      tags: page.frontmatter.tags,
      new: (+new Date() - +new Date(page.frontmatter.updated)) < tenDaysInMS
    }))
    .sort((a, b) => +new Date(b.updated) - +new Date(a.updated))
    .sort((a, b) => a.order - b.order)


  const tagsSet = new Set()
  projects.forEach(ex => {
    ex.tags.forEach(tag => tagsSet.add(tag))
  })

  const tags = Array.from(tagsSet)
  tags.unshift("All projects")

  return props.children({ projects, tags })
}

class DocsProjectsOverview extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      activeTag: "All Projects"
    }
  }

  render() {
    const activeTag = this.state.activeTag

    return (
      <DocsProjectsData>
        {({ projects, tags }) => (
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
            <div className="Projects-Cards">
                    {projects
                        .filter(ex =>
                        activeTag === "All Projects" ?
                            true :
                            ex.tags.indexOf(activeTag) >= 0
                        )
                        .map((project, i) => (
                    <Card>
                        <Img className="project-feature-image-top" fluid={project.featuredImage} />
                        <CardBody>
                            <CardTitle>
                                {project.title}
                            </CardTitle>
                            <CardSubtitle>
                                    Last Updated: {project.new} By {project.author} 
                            </CardSubtitle>
                            <CardText>
                                    {project.description}
                            </CardText>
                            <Link to={project.slug} >
                              Read more
                            </Link>
                        </CardBody>
                    </Card>  
                    ))}
              </div>
          </>
        )}
      </DocsProjectsData>
    )
  }
}

export default DocsProjectsOverview