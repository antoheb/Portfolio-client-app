import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react'
import { LoadingComponent } from '../../app/layout/LoadingComponent'
import { RootStoreContext } from '../../app/stores/rootStore'
import { Field, Form as FinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import { combineValidators, isRequired } from 'revalidate'
import { IUserFormValues } from '../../app/models/user'
import { TextInput } from '../../app/common/form/TextInput'
import { TextAreaInput } from '../../app/common/form/TextAreaInput'
import { ErrorMessage } from '../../app/common/form/ErrorMessage'

export const AdminHomePage: React.FC = () => {
  const validate = combineValidators({
    firstName: isRequired({ message: 'First name is mandantory' }),
    lastName: isRequired({ message: 'Last name is mandantory' }),
    dateOfBirth: isRequired({ message: 'Date of birth is mandantory' }),
    aboutMe: isRequired({ message: 'About me section is mandantory' }),
    street: isRequired({ message: 'Street is mandantory' }),
    city: isRequired({ message: 'City is mandantory' }),
    state: isRequired({ message: 'State is mandantory' }),
    zip: isRequired({ message: 'Postal code is mandantory' }),
    email: isRequired({ message: 'Email is mandantory' }),
    phoneNumber: isRequired({ message: 'Phone Number is mandantory' }),
    pictureUrl: isRequired({ message: 'Picture url is mandantory' }),
  })

  const rootStore = useContext(RootStoreContext)
  const { getUser, user, modifyUser } = rootStore.userStore
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUser().then(() => setLoading(false))
  }, [getUser, setLoading])

  if (loading) {
    return <LoadingComponent content="Loading..." />
  }

  return (
    <Fragment>
      <Header as="h1">
        <Icon name="user" color="blue" />
        <Header.Content>
          Personal information
          <Header.Subheader>
            Manage the information about yourself
          </Header.Subheader>
        </Header.Content>
      </Header>
      <FinalForm
        initialValues={user}
        validate={validate}
        onSubmit={(values: IUserFormValues) =>
          modifyUser(user!.id, values).catch((error) => ({
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
            <Grid
              centered
              style={{
                marginRight: '3em',
                marginLeft: '3em',
                marginTop: '3em',
              }}
            >
              <Grid.Row columns="3">
                <Grid.Column>
                  <Field
                    placeholder="FirstName"
                    name="firstName"
                    component={TextInput}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Field
                    placeholder="LastName"
                    name="lastName"
                    component={TextInput}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Field
                    placeholder="Date Of Birth"
                    name="dateOfBirth"
                    component={TextInput}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Field
                    placeholder="About Me"
                    name="aboutMe"
                    component={TextAreaInput}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns="4">
                <Grid.Column>
                  <Field
                    placeholder="Street"
                    name="street"
                    component={TextInput}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Field placeholder="City" name="city" component={TextInput} />
                </Grid.Column>
                <Grid.Column>
                  <Field
                    placeholder="State"
                    name="state"
                    component={TextInput}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Field
                    placeholder="Postal Code"
                    name="zip"
                    component={TextInput}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns="2">
                <Grid.Column>
                  <Field
                    placeholder="Email"
                    name="email"
                    component={TextInput}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Field
                    placeholder="Phone Number"
                    name="phoneNumber"
                    component={TextInput}
                  />
                </Grid.Column>
              </Grid.Row>
              {submitError && !dirtySinceLastSubmit && (
                <Grid.Row>
                  <Grid.Column>
                    <ErrorMessage error={submitError} />
                  </Grid.Column>
                </Grid.Row>
              )}
              <Grid.Row>
                <Grid.Column>
                  <Button
                    disabled={(invalid && !dirtySinceLastSubmit) || pristine}
                    fluid
                    color="blue"
                    type="submit"
                    content="SAVE"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        )}
      />
    </Fragment>
  )
}
