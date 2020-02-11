import React from "react"
import ReactHtmlParser from "react-html-parser"

const PortfolioItem = props => {
    const { title, desc, url } = props.data
    const { filename, alt } = props.data.img

    return (
        <div className="row portfolio-item odd">
            <div className="four columns">
                <a className="image-link" href={url}>
                    <img src={`img/${filename}`} alt={alt} />
                </a>
            </div>
            <div className="eight columns">
                <h4>{title}</h4>
                <p>{ReactHtmlParser(desc)}</p>
                <p>
                    <a href={url}>Visit project</a>
                </p>
            </div>
        </div>
    )
}

export default PortfolioItem
