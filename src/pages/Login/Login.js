import React, { useState } from 'react';
import Api from "./Api";
import {
  primaryColor
} from "../../assets/jss/global.js";
import {
  Avatar,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Typography,
  Link,
  Box,
  Container,
  Grid,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// custom component
import Button from "../../components/CustomButtons/Button.js";

//import { useAuth } from '../Hooks/UseAuth';

/* styles */
const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: primaryColor[0]
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  }
}));

export default function Login(props) {

  const classes = useStyles();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    user[e.target.name] = e.target.value;
    setUser(user => ({ ...user }));
  }


  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(user)

    Api.login(user.email, user.password);

  }

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          Cultureweb
      </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar} >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleFormSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
              //onChange={handleEmailChange}
              value={user.email}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              //onChange={handlePasswordChange}
              onChange={handleChange}
              value={user.password}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Grid container spacing={3}>
            <Grid item xs={4}>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign in
          </Button>

            </Grid>
            <Grid item xs={8} style={{ textAlign: "end", alignSelf: "center" }}>

              <Link href="#" variant="body2"  >
                Forgot password?
              </Link>


            </Grid>
          </Grid>

        </form>
      </Paper>

      <Box mt={4}>
        <Copyright />
      </Box>
    </Container>
  );
}
