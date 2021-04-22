import React, { Fragment } from 'react'
import { Button } from 'semantic-ui-react'
import { history } from '../..'

export const HomePage: React.FC = () => {
  return (
    <Fragment>
      <div
        style={{
          backgroundImage:
            "url('https://wallpaperaccess.com/full/279935.gif')",
          backgroundSize: 'cover',
          height: '100vh',
        }}
      >
        <div
          style={{
            position: 'absolute',
            marginLeft: '35%',
            marginTop: '1em',
            color: 'white',
            fontSize: '40px',
            textAlign: 'center',
          }}
        >
          Hello, I'm <span style={{color:'lightsalmon'}}>Antoine Hebert.</span> <br />
          And this my Portfolio.
          <br />
          <Button color='orange' basic inverted onClick={() => history.push('/about')}>
            VIEW MY PORTFOLIO -{'>'}
          </Button>
        </div>
      </div>
    </Fragment>
  )
}
