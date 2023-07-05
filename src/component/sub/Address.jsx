import React from "react"

function Address(props) {
    return (
        <div>
            <h2>Address</h2>
            <h3> city = { props.fCity } </h3>
            <h3> zip = { props.fZip }</h3>
        </div>
    )
}

export default Address