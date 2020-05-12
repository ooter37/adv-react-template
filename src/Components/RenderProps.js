import React from 'react'
import Welcome from './Welcome'

export default function SomeFn() {
    return (
        <div>
            <Welcome>Hello World!</Welcome>
        </div>
    )
}


import React from 'react'

export default function Welcome(props) {
return <p>{props.children}</p>
}