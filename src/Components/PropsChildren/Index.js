import React from 'react'
import Hover from './Hover'
import Box from '../RenderProps/Box'

export default function Index(props) {
    return (
        <div>
            <h1>Props.Children</h1>
        <Hover>
            {hovering => <div>{hovering ? 'you are hovering' : 'hover for a secret'}</div>}
        </Hover>
        <Hover>
            {hovering => <Box isHovered={hovering} title='props.children box' text='hi'/>}
        </Hover>
        </div>
    )
}   
