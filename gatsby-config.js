require("dotenv").config({
  path: `.env.development`,
})

const aliases = {
  "~": "src",
}

const pages = [
  { name: { is: `Sýningarnar`, en: `Exhibitions` }, slug: `/` },
  { name: { is: `Listamenn`, en: `Artists` }, slug: `/listamenn` },
  // {
  //   name: { is: `Um Listvitann`, en: `About Listvitinn` },
  //   slug: `/um-listvitann`,
  // },
]

module.exports = {
  siteMetadata: {
    title: `Listvitinn`,
    description: `Myndlistarsýningar á Íslandi.`,
    url: `https://listvitinn.art/`,
    logo: "/assets/listvitinn-logo2.png",
    favicon: "assets/viti.png",
    pages: pages,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: aliases,
        extensions: [`ts`, `tsx`],
      },
    },
  ],
}
