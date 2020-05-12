import React from 'react'
import axios from 'axios'
import Display from './Display'

export default class CharacterListContainer extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        characters: []
    }
}
    componentDidMount(){
        axios.get('https://swapi.dev/api/people').then(characters => {
            this.setState({characters: characters.data.results})
        })
    }
    render() {
        return(
        <Display characters={this.state.characters}/>
        )
    }
}