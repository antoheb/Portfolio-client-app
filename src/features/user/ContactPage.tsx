import React, { useContext } from 'react'
import { Button, Form, Grid, Header, Icon, Label } from 'semantic-ui-react'
import { Field, Form as FinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import { combineValidators, isRequired } from 'revalidate'
import { IExperience } from '../../app/models/experience'
import { RootStoreContext } from '../../app/stores/rootStore'
import { TextInput } from '../../app/common/form/TextInput'
import { TextAreaInput } from '../../app/common/form/TextAreaInput'

export const ContactPage: React.FC = () => {
  const validate = combineValidators({
    name: isRequired({ message: 'Name is mandantory' }),
    email: isRequired({ message: 'Email is mandantory' }),
    subject: isRequired({ message: 'Subject is mandantory' }),
    message: isRequired({ message: 'Message is mandantory' }),
  })

  const rootStore = useContext(RootStoreContext)
  const { newExperience } = rootStore.experienceStore

  return (
    <section
      id="contact"
      style={{ backgroundColor: '#202020', paddingTop: '4em', paddingBottom:'4em' }}
    >
      <Grid style={{ marginLeft: '15em', marginRight: '15em' }}>
        <Grid.Row style={{ marginBottom: '2em' }}>
          <Grid.Column width={3}>
            <Icon name="mail" inverted size="huge" />
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as="h2" inverted style={{ paddingTop: '1em' }}>
              CONTACT ME
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header as="h4" inverted>
              Name*
            </Header>
            <br />
            <br />
            <Header as="h4" inverted>
              Email*
            </Header>
            <br />
            <br />
            <Header as="h4" inverted>
              Subject*
            </Header>
            <br />
            <br />
            <Header as="h4" inverted>
              Message*
            </Header>
            <br />
            <br />
          </Grid.Column>
          <Grid.Column width={8}>
            <FinalForm
              validate={validate}
              onSubmit={(values: IExperience) =>
                newExperience(values).catch((error) => ({
                  [FORM_ERROR]: error,
                }))
              }
              render={({
                handleSubmit,
                invalid,
                submitError,
                pristine,
                dirtySinceLastSubmit,
              }) => (
                <Form onSubmit={handleSubmit} error>
                  <Field name="name" component={TextInput} color={'#888888'}/>
                  <br />
                  <br />
                  <Field name="email" component={TextInput} color={'#888888'}/>
                  <br />
                  <br />
                  <Field name="subject" component={TextInput} color={'#888888'}/>
                  <br />
                  <br />
                  <Field name="message" component={TextAreaInput} color={'#888888'}/>
                  <br />
                  <Button
                    disabled={(invalid && !dirtySinceLastSubmit) || pristine}
                    color="orange"
                    inverted
                    type="submit"
                    content="SUBMIT"
                  />
                </Form>
              )}
            />
          </Grid.Column>
          <Grid.Column width={5}></Grid.Column>
        </Grid.Row>
      </Grid>
    </section>
  )
}
