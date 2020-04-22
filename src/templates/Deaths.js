import React, { Fragment } from 'react'

const Deaths = ({ pageContext: { deaths } }) => {
  console.log(deaths)
  return (
    <Fragment>
      <h1>Deaths</h1>
      {deaths.map(({ cause, death, death_id: deathId, episode, season }) => (
        <Fragment key={deathId}>
          <h2>{death}</h2>
          <h3>Occured in Season {season} Episode {episode}</h3>
          <h4>Cause: {cause}</h4>
        </Fragment>
      ))}

    </Fragment>
  )
}

export default Deaths
