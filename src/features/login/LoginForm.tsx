import React, { useContext } from 'react'
import { Button, Container, Form, Header } from 'semantic-ui-react'
import { TextInputIcon } from '../../app/common/form/TextInputIcon'
import { Field, Form as FinalForm } from 'react-final-form'
import { combineValidators, isRequired } from 'revalidate'
import { FORM_ERROR } from 'final-form'
import { RootStoreContext } from '../../app/stores/rootStore'
import { ErrorMessage } from '../../app/common/form/ErrorMessage'
import { IAuthenticationFormValues } from '../../app/models/user'

export const LoginForm = () => {
  const validate = combineValidators({
    username: isRequired({ message: 'Username is mandantory' }),
    password: isRequired({ message: 'Password is mandantory' }),
  })

  const rootStore = useContext(RootStoreContext)
  const { login, loadingInitial } = rootStore.userStore

  return (
    <div style={{backgroundColor:'#1a1a1a', height:'100vh'}}>
    <Container style={{ paddingTop: '10em', width: '400px'  }}>
      <Header inverted as="h1" style={{ textAlign: 'center', marginBottom: '50px'}}>
        Login
      </Header>
      <FinalForm
        validate={validate}
        onSubmit={(values: IAuthenticationFormValues) =>
          login(values).catch((error) => ({
            [FORM_ERROR]: error,
          }))
        }
        render={({
          handleSubmit,
          invalid,
          pristine,
          submitError,
          dirtySinceLastSubmit,
        }) => (
          <Form onSubmit={handleSubmit} error>
            <Header inverted as={'h5'}>USERNAME</Header>
            <Field
              placeholder="example@outlook.com"
              name="username"
              icon="mail"
              component={TextInputIcon}
            />
            <Header inverted as={'h5'}>PASSWORD</Header>
            <Field
              placeholder="Password"
              name="password"
              icon="lock"
              type="password"
              component={TextInputIcon}
            />
            {submitError && !dirtySinceLastSubmit && (
              <ErrorMessage error={submitError} />
            )}
            <br />
            <Button
              loading={loadingInitial}
              fluid
              disabled={(invalid && !dirtySinceLastSubmit) || pristine}
              color="orange"
              type="submit"
              content="CONNEXION"
            />
          </Form>
        )}
      />
    </Container>
    </div>
  )
}
