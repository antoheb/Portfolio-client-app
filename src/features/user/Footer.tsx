import React from 'react'
import { Header } from 'semantic-ui-react'

export const Footer: React.FC = () => {
  return (
    <section
      id="footer"
      style={{
        backgroundColor: 'black',
        paddingTop: '5em',
        paddingBottom: '5em',
      }}
    >
      <Header inverted as="h2" textAlign="center">
        FOOTER
      </Header>
    </section>
  )
}
