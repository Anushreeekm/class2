import React from "react"

function Edu(props) {
    return (
        <div>
            <h2>Education</h2>
            <h3> type = { props.fType }</h3>
            <h3> title = { props.fTitle }</h3>
            <h3> year = { props.fYear }</h3>
        </div>
    )
}

export default Edu