import React from 'react'

function Container(props) {

    return (
        <div>
            <h3>Container Component</h3>
            {props.children}
        </div>
    )
}

export default Container