/*
* https://tailwindui.com/components/marketing/sections/blog-sections
* 3 Column Cards
*/
import * as React from "react"

import { graphql, useStaticQuery } from "gatsby";

import ArticleList from "../components/articles"
import Categories from "../components/categories"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  const data = useStaticQuery(query);
  return (
    <Layout seo={data.strapiHomepage.seo}>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              {data.strapiHomepage.hero.title}
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              {data.strapiHomepage.hero.subtitle}
            </p>
          </div>
          <ArticleList articles={data.allStrapiArticle.edges} />
        </div>
      </div>
    </Layout>
  )
}
const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
        subtitle
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
    allStrapiCategory {
      group(field: slug) {
        totalCount
        edges {
          node {
            slug
            name
            plural
          }
        }
      }
    }
    allStrapiArticle(filter: {  }) {
      edges {
        node {  
          strapiId
          slug
          title
          description
          published_at
          fields {
            readingTime {
              text
            }
          }
          category {
            name
            slug
          }
          image {
            childImageSharp {
              gatsbyImageData(
                width: 800
              )
            }
          }
          author {
            name
            avatar {
              childImageSharp {
                gatsbyImageData(
                  width: 30
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage
