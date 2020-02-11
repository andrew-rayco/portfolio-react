import React from "react"

import PortfolioItem from "./PortfolioItem"
import items from "../data/portfolio-items"

const WorkList = () => {
    return (
        <div className="container blog">
            <h1>Things I've made</h1>
            {items.map((item, i) => (
                <PortfolioItem data={item} key={i} />
            ))}
        </div>
    )
}

export default WorkList
