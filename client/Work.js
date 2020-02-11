import React from "react"

import SubPageNav from "./SubPageNav"
import WorkList from "./WorkList"
import PennyFarthing from "./PennyFarthing"

const Work = () => {
    return (
        <div className="work">
            <SubPageNav page="work" />
            <WorkList />
            <PennyFarthing />
        </div>
    )
}

export default Work
