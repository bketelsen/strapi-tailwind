import * as React from "react"

import { graphql, useStaticQuery } from "gatsby"

import { Link } from "gatsby"
import { useState } from 'react'

const Navigation = () => {
    const [isMobileOpen, setMobileOpen] = useState(false)
    const [category, setCategory] = useState("")

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
        <nav className="bg-indigo-600 border-b border-indigo-300 border-opacity-25 lg:border-none">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                    <div className="px-2 flex items-center lg:px-0">
                        <div className="flex-shrink-0">
                            <img className="block h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg" alt="Workflow" />
                        </div>
                        <div className="hidden lg:block lg:ml-10">
                            <div className="flex space-x-4">
                                <a href="/" className="bg-indigo-700 text-white rounded-md py-2 px-3 text-sm font-medium">
                                    Home
                                </a>
                                {data.allStrapiCategory.edges.map((e) => {
                                    return (

                                        <a key={e.node.slug} onClick={() => setCategory(e.node.slug)} href={`/category/${e.node.slug}`} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                            {e.node.plural}
                                        </a>
                                    )

                                })}

                            </div>
                        </div>
                    </div>
                    <div className="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
                        <div className="max-w-lg w-full lg:max-w-xs">
                            <label htmlFor="search" className="sr-only">Search</label>
                            <div className="relative text-gray-400 focus-within:text-gray-600">
                                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <input id="search" className="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white focus:border-white sm:text-sm" placeholder="Search" type="search" name="search" />
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" onClick={() => setMobileOpen(!isMobileOpen)} className="bg-indigo-600 p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
  
            <div className={`${!isMobileOpen ? 'hidden' : ''} lg:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="/" className="bg-indigo-700 text-white block rounded-md py-2 px-3 text-base font-medium">
                        Home
                    </a>
                    {data.allStrapiCategory.edges.map((e) => {
                        return (
                            <a key={e.node.slug} href={`/category/${e.node.slug}`} className="bg-indigo-700 text-white block rounded-md py-2 px-3 text-base font-medium">
                                {e.node.plural}
                            </a>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navigation
