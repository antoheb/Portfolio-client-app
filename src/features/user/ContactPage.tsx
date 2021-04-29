import React, { useContext } from 'react'
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react'
import { Field, Form as FinalForm } from 'react-final-form'
import { combineValidators, isRequired } from 'revalidate'
import { RootStoreContext } from '../../app/stores/rootStore'
import { TextInput } from '../../app/common/form/TextInput'
import { TextAreaInput } from '../../app/common/form/TextAreaInput'
import { IEmail } from '../../app/models/email'

export const ContactPage: React.FC = () => {
  const validate = combineValidators({
    name: isRequired({ message: 'Name is mandantory' }),
    email: isRequired({ message: 'Email is mandantory' }),
    subject: isRequired({ message: 'Subject is mandantory' }),
    message: isRequired({ message: 'Message is mandantory' }),
  })

  const rootStore = useContext(RootStoreContext)
  const { user } = rootStore.userStore
  const { sendEmail } = rootStore.commonStore

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#1a1a1a',
        paddingTop: '4em',
        paddingBottom: '4em',
      }}
    >
      <Grid style={{ marginLeft: '15em', marginRight: '15em' }}>
        <Grid.Row style={{ marginBottom: '2em' }}>
          <Grid.Column width={3}>
            <Icon name="mail" inverted size="huge" />
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as="h1" inverted style={{ paddingTop: '15px' }}>
              CONTACT ME
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header as="h4" style={{ color: 'lightsalmon' }}>
              Name*
            </Header>
            <br />
            <br />
            <Header as="h4" style={{ color: 'lightsalmon' }}>
              Email*
            </Header>
            <br />
            <br />
            <Header as="h4" style={{ color: 'lightsalmon' }}>
              Subject*
            </Header>
            <br />
            <br />
            <Header as="h4" style={{ color: 'lightsalmon' }}>
              Message*
            </Header>
            <br />
            <br />
          </Grid.Column>
          <Grid.Column width={8}>
            <FinalForm
              validate={validate}
              onSubmit={(values: IEmail) => sendEmail(values)}
              render={({
                handleSubmit,
                invalid,
                pristine,
                dirtySinceLastSubmit,
              }) => (
                <Form onSubmit={handleSubmit} error>
                  <Field name="name" component={TextInput} color={'#595959'} />
                  <br />
                  <br />
                  <Field name="email" component={TextInput} color={'#595959'} />
                  <br />
                  <br />
                  <Field
                    name="subject"
                    component={TextInput}
                    color={'#595959'}
                  />
                  <br />
                  <br />
                  <Field
                    name="message"
                    component={TextAreaInput}
                    color={'#595959'}
                  />
                  <br />
                  <Button
                    disabled={(invalid && !dirtySinceLastSubmit) || pristine}
                    color="orange"
                    inverted
                    size='big'
                    type="submit"
                    content="SUBMIT"
                  />
                </Form>
              )}
            />
          </Grid.Column>
          <Grid.Column width={5} style={{ paddingLeft: '3em' }}>
            <Header inverted as="h3">
              Email and Phone
            </Header>
            <div
              style={{ color: '#595959', fontSize: '15px', lineHeight: '30px' }}
            >
              {user?.firstName + ' ' + user?.lastName} <br />
              {user?.street} <br />
              {user?.city + ', ' + user?.state + ' ' + user?.zip} <br />
              {user?.email} <br />
              {user?.phoneNumber}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </section>
  )
}
