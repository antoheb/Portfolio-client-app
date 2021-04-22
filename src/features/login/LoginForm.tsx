import React, { useContext } from "react";
import { Button, Container, Form, Grid, Header } from "semantic-ui-react";
import { TextInputIcon } from "../../app/common/form/TextInputIcon";
import { Field, Form as FinalForm } from "react-final-form";
import {
  combineValidators,
  isRequired,
} from "revalidate";
import { Link } from "react-router-dom";
import { FORM_ERROR } from "final-form";
import { RootStoreContext } from "../../app/stores/rootStore";
import { ErrorMessage } from '../../app/common/form/ErrorMessage';
import { IAuthenticationFormValues } from "../../app/models/user";

export const LoginForm = () => {
    const validate = combineValidators({
      username: isRequired({ message: "Adresse courriel est obligatoire" }),
      password: isRequired({ message: "Le mot de passe est obligatoire" }),
    });
  
    const rootStore = useContext(RootStoreContext);
    const { login, loadingInitial } = rootStore.userStore;
  
    return (
      <Container
        fluid
        style={{ marginTop: "10px", marginBottom: "50px", width: "400px" }}
      >
        <Header as="h1" style={{ textAlign: "center", marginBottom: "50px" }}>
          S'IDENTIFIER
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
              <Header as={"h5"}>IDENTIFIANT</Header>
              <Field
                placeholder="fido@dogmail.com"
                name="username"
                icon="mail"
                component={TextInputIcon}
              />
              <Header as={"h5"}>MOT DE PASSE</Header>
              <Field
                placeholder="mot de passe"
                name="password"
                icon="lock"
                type="password"
                component={TextInputIcon}
              />
              {submitError && !dirtySinceLastSubmit && (
                <ErrorMessage error={submitError} />
              )}
              {/* For now, the submit button only acts as a Link to the other form, obviously, we would not redirect if the server returned an error. */}
              <a href="client/mot-de-passe-oublier">
                Vous avez oublié votre mot de passe?
              </a>
              <br />
              <br />
              <Grid stackable>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Button
                      loading={loadingInitial}
                      fluid
                      disabled={(invalid && !dirtySinceLastSubmit) || pristine}
                      color="teal"
                      type="submit"
                      content="CONNEXION"
                    />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Button
                      loading={loadingInitial}
                      fluid
                      basic
                      color="teal"
                      content="S'INSCRIRE"
                      as={Link}
                      to={"/nouveau-compte"}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form>
          )}
        />
      </Container>
    );
  };