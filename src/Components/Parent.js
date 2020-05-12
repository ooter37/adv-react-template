import React from 'react'
import Child from './Child'
export default function Parent() {
    return (
        <Child render={() => <h1>This is the child</h1>}/>
    )
}



import React from 'react'

export default function Child(){
    return (
        <div>
        {props.render()}
        </div>
    )
}