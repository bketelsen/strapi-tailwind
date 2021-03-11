import * as React from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Categories = ({ title, categories }) => {
    return (
        <div className="pt-10">
            <div className="pb-5 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {title}
                </h3>
            </div>
            <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {categories.map(cat => {
                    return (
                        <li key={cat.edges[0].node.name} className="col-span-1 flex shadow-sm rounded-md">

                                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md">
                                    {cat.edges[0].node.name.charAt(0)}
                                </div>
                            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                <div className="flex-1 px-4 py-2 text-sm truncate">
                                    <a href={`/category/${cat.edges[0].node.slug}`} className="text-gray-900 font-bold hover:text-gray-600">{cat.edges[0].node.plural}</a>
                                    <span className="flex">
                                        <p className="text-gray-500">{cat.totalCount} {cat.totalCount > 1 ? `${cat.edges[0].node.plural}` : `${cat.edges[0].node.name}`}</p>
                                    </span>
                                </div>
                            </div>
                        </li>

                    )
                })}
            </ul>
        </div>
    )
}

export default Categories;