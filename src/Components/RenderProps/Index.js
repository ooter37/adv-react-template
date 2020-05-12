import React from 'react'
import Hover from './Hover'
import Box from './Box'
export default function Index(props) {
    return (
        <div>
            <h1>Render Props</h1>
            <Hover render={(hovering) => <div>{hovering ? 'hovering' : 'not hovering'}</div>}/>
            <Hover render={hovering => <Box isHovered={hovering} text='derek' title='first box'/>}/>
            <Hover render={hovering => <Box isHovered={hovering} text='another box' title='hover here'/>}/>
        </div>
    )
}   
