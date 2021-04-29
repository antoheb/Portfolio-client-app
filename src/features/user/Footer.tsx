import React from 'react'
import {Icon } from 'semantic-ui-react'

export const Footer: React.FC = () => {
  return (
    <section
      id="footer"
      style={{
        backgroundColor: '#0d0d0d',
        paddingTop: '3em',
        paddingBottom: '3em',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <a href="https://github.com/antoheb">
          <Icon name="github" inverted size="big" link />
        </a>
        &nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/antoine-hebert-92254b1b9/">
          <Icon name="linkedin" inverted size="big" link />
        </a>
        &nbsp;&nbsp;
        <a href="https://www.instagram.com/anto_h3b/">
          <Icon name="instagram" inverted size="big" link />
        </a>
        &nbsp;&nbsp;
        <a href="https://www.facebook.com/antoine.hebert.509/">
          <Icon name="facebook" inverted size="big" link />
        </a>
      </div>
    </section>
  )
}
