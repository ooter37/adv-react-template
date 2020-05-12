import React from 'react'

export default function StarWars(props) {
    const characterList = props.characters.map((character) => {
        return (
            <div key={character.url} className='star-wars-char'>
                <h2>name: {character.name}</h2>
                <h3>height: {character.height}</h3>
                <h3> mass: {character.mass}</h3>
            </div>
        )
    })
    return (
    <div>{characterList}</div>
    )
}