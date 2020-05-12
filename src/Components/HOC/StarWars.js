import React from 'react'
import myHOC from './MyHOC'

class StarWars extends React.Component {
    render(){
        const characterList = this.props.data.results.map((character) => {
            return (
                <div key={character.url} className='star-wars-char'>
                    <h2>name: {character.name}</h2>
                    <h3>height: {character.height}</h3>
                    <h3>mass: {character.mass}</h3>
                </div>
            )
        })
        return (
            <div>
                <div>{characterList}</div>
            </div>
        )
    }
}

export default myHOC(StarWars, 'http://swapi.dev/api/people')