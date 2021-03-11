import * as React from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

const Card = ({ article }) => (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div className="flex-shrink-0">
        <GatsbyImage 
             className="h-48 w-full object-cover"
            alt={article.node.title}
            image={article.node.image.childImageSharp.gatsbyImageData} />

    </div>
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
                <a href={`/category/${article.node.category.slug }`} className="hover:underline">
                   {article.node.category.name} 
                </a>
            </p>
            <a href={`/${article.node.category.slug}/${article.node.slug}`} className="block mt-2">
                <p className="text-xl font-semibold text-gray-900">
                    {article.node.title} 
                </p>
                <p className="mt-3 text-base text-gray-500">
                    {article.node.description}
                </p>
            </a>
        </div>
        <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
                <a href="#">
                    <span className="sr-only">{article.node.author.name}</span>
                    <GatsbyImage alt={"author avatar"} image={article.node.author.avatar.childImageSharp.gatsbyImageData} />

                </a>
            </div>
            <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                    <a href="#" className="hover:underline">
                        {article.node.author.name}
                    </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={article.published_at}>
              {new Date(article.node.published_at).toLocaleDateString(
                'en-us',
                postDateTemplate
              )}
            </time>
                    <span aria-hidden="true">
                        &middot;
                    </span>
                    <span>
                        {article.node.fields.readingTime.text}
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
)

  export default Card
  