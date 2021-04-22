import React, { Fragment } from "react";
import { Button, Dimmer, Grid, Header, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { history } from "../..";

export const HomePage: React.FC = () => {
  return (
    <Fragment>
      <Grid>
      <Header as='h1'>Home Page</Header>
      </Grid>
    </Fragment>
  );
};