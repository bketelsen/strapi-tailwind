/**
Brand nav with overlap
https://tailwindui.com/components/application-ui/application-shells/stacked

nav :                 <!-- Current: "bg-indigo-700 text-white", Default: "text-white hover:bg-indigo-500 hover:bg-opacity-75" -->

/
 */

import * as React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Navigation from "./nav";
import PropTypes from "prop-types"
import Seo from "./seo";

const Layout = ({ children, seo }) => {

  const data = useStaticQuery(graphql`
  query {
    strapiGlobal {
      siteName
    }
    allStrapiCategory {
      edges {
        node {
          slug
          name
          plural
        }
      }
    }
  }
  `)

  return (
    <>
      <Seo seo={seo} />
      <div className="min-h-screen bg-gray-100">
        <div className="bg-indigo-600 pb-32">
        <Navigation />
        </div>
        <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
              {children}
            </div>
          </div>
        </main>
      </div>


    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
