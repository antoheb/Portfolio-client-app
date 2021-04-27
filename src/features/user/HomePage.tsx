import React, { Fragment } from 'react'
import { Button } from 'semantic-ui-react'

export const HomePage: React.FC = () => {
  return (
    <section id="#home">
      <div
        style={{
          backgroundImage: "url('https://image.ibb.co/dPHMqH/p25.jpg')",
          backgroundSize: 'cover',
          height: '100vh',
        }}
      >
        <div
          style={{
            position: 'absolute',
            marginLeft: '35%',
            marginTop: '5em',
            color: 'white',
            fontSize: '40px',
            textAlign: 'center',
          }}
        >
          Hello, I'm{' '}
          <span style={{ color: 'lightsalmon' }}>Antoine Hebert.</span> <br />
          And this is my Portfolio.
          <br />
          <a className="smoothscroll" href="#about">
            <Button color="orange" basic inverted>
              VIEW MY PORTFOLIO -{'>'}
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
