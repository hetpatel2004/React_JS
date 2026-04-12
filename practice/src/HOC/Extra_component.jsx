import React from 'react'

function Extra_component(Hello ) {

    function custom_function () {
        return(<>
            <h1>message returned</h1>
            <Hello/>
        </>
        )
    }
    return custom_function
}

export default Extra_component