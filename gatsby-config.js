const docsConfig = require("./docs-config.js")

const isProduction = process.env.NODE_ENV === "production"

const getProduct = (name) => {
  const repo = "@cloudflare/cloudflare-brand-assets"
  const dir = "resources/product-icons/"
  return `./node_modules/${repo}/${dir}/${name}.js`
}

const products = [
  "1.1.1.1",
  "access",
  "analytics",
  "api",
  "argo-tunnel",
  "byoip",
  "cloudflare-for-teams",
  "cloudflare-one",
  "distributed-web",
  "docs-engine",
  "events",
  "firewall",
  "gateway",
  "http3",
  "images",
  "internet",
  "load-balancing",
  "logs",
  "magic-transit",
  "mobile-sdk",
  "network-interconnect",
  "randomness-beacon",
  "registrar",
  "spectrum",
  "ssl",
  "stream",
  "tenant",
  "terraform",
  "time-services",
  "waf",
  "warp-client",
  "workers",
]

const productIcons = {}
products.forEach(name => {
  productIcons[name] = require(getProduct(name)).pathD
})

if (docsConfig.productLogoPathD && docsConfig.productIconKey) {
  return Error("Set either `productLogoPathD` or `productIconKey` in docs-config.js, not both")
}

if (docsConfig.productIconKey) {
  docsConfig.productLogoPathD = productIcons[docsConfig.productIconKey]
}

const siteMetadata = docsConfig.siteMetadata
siteMetadata.cloudflareDocs = {}
Object.keys(docsConfig).forEach(prop => {
  if (prop === "siteMetadata") return
  siteMetadata.cloudflareDocs[prop] = docsConfig[prop]
})

siteMetadata.cloudflareDocs.productIcons = productIcons

// We exposed friendlier siteMetadata.url to Docs consumers but
// gatsby-plugin-sitemap requires `siteUrl` https://git.io/JUUxW
siteMetadata.siteUrl = siteMetadata.url
delete siteMetadata.url

module.exports = {
  // Deploy production site to the docs config pathPrefix
  // but keep local development done at the root due to:
  // https://github.com/gatsbyjs/gatsby/issues/16040
  pathPrefix: isProduction ? docsConfig.pathPrefix : "",
  siteMetadata: siteMetadata,

  plugins: [
    "gatsby-plugin-eslint",
    "gatsby-plugin-no-sourcemaps",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-remove-trailing-slashes",

    // Sets page.updatedAt to the author time of last commit (https://git.io/JfPCj)
    "saber-plugin-git-modification-time",

    // Custom sitemap configuration that fixes prefix issues
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        resolveSiteUrl: () => new URL(siteMetadata.siteUrl).origin,
      },
    },

    // Prevent nav from (un)mounting on page navigations (https://git.io/JfOKn)
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/docs-page.js")
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/content/`
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1382,
              disableBgImageOnAlpha: true
            },
          },
          // Copies linked files from Markdown to public directory (ie for gifs)
          `gatsby-remark-copy-linked-files`,
        ],
        remarkPlugins: [require("remark-slug")]
      }
    },
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        stylesProvider: {
          disableGeneration: true
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Covalent docs",
        short_name: "Docs",
        start_url: "/",
        background_color: "#25275b",
        theme_color: "#25275b",
        display: "minimal-ui",
        icon: "../static/images/covalent-logomark-white.png"
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KGLWPX7",
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        // defaultDataLayer: { platform: "gatsby" },
      },
    },
    // Consider enabling for PWA + offline functionality
    // https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
