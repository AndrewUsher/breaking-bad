import React, { Fragment } from 'react'
import styled from 'styled-components'

const CharacterImage = styled.img`
  max-height: 200px;
`

const Deaths = ({ pageContext: { characters } }) => {
  console.log(characters)
  return (
    <Fragment>
      <h1>Characters</h1>
      {characters.map(({ char_id: characterId, img, name, occupation }) => (
        <article key={characterId}>
          <h2>{name}</h2>
          <CharacterImage src={img} loading="lazy" />
          <h3>Occupations: {occupation.join(', ')}</h3>
        </article>
      ))}

    </Fragment>
  )
}

export default Deaths
