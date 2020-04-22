import React, { Fragment } from 'react'

const Deaths = ({ pageContext: { characters } }) => {
  console.log(characters)
  return (
    <Fragment>
      <h1>Characters</h1>
      {characters.map(({ char_id: characterId, img }) => (
        <article key={characterId}>
          <img src={img} />
        </article>
      ))}

    </Fragment>
  )
}

export default Deaths
