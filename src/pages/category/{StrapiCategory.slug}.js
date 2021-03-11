import ArticleList from "../../components/articles"
import Layout from "../../components/layout"
import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query Category($slug: String!) {
    articles: allStrapiArticle(
      filter: { category: { slug: { eq: $slug } } }
    ) {
      edges {
        node {
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
    category: strapiCategory(slug: { eq: $slug }) {
      name
      plural
    }
  }
`;

const Category = ({ data }) => {
  const articles = data.articles.edges;
  const category = data.category.name;
  const category_plural = data.category.plural;
  const seo = {
    metaTitle: category,
    metaDescription: `All ${category_plural}`,
  };

  return (
    <Layout seo={seo}>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              {category_plural}
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
  
            </p>
          </div>
          <ArticleList articles={articles} />
        </div>
      </div>

    </Layout>
  );
};

export default Category;
