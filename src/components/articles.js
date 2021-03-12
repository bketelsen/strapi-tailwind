import * as React from "react"

import Card from './card'
import { Link } from "gatsby"
import PropTypes from "prop-types"

const ArticleList = ({ articles }) => {
    if (articles.length) {
        return (
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {articles.map((article) => {
                    return (
                        <Card key={article.node.slug} article={article} />
                    )
                })}
            </div>
        )
    } else {
        return (

            <span>No Articles Found</span>
        )
    }
}



export default ArticleList

