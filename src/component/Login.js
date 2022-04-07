import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { loginData } from "./loginData";
import { Alert } from "@mui/material";
import { Login } from "./context/context";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export default function SignIn() {
  const theme = createTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  

const loginContext = React.useContext(Login);

const clickHandler = (e) => {
    e.preventDefault();
  
    let obj = {};
    loginData.map((detail) => {
      if (detail.email === email && detail.password === password) {
        obj = { ...obj, email: detail.email, pwd: detail.password };
        localStorage.setItem('login',email);
      }
    });
    if (obj.email === email && obj.pwd === password) {
       loginContext.dispatch({type:'login'});
      navigate("/products");
      setIsError(false);
    } else {
      setEmail('');
      setPassword('')
        setIsError(true);
        
    }  
   
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        
        <Box 
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
            }}
        >
          <Avatar sx={{ bgcolor: "green" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <ValidatorForm  style={{width:"100%" }} 
          onError={errors => console.log(errors)} 
            sx={{ mt: 1 }}>
            <TextValidator
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              autoComplete="email"
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextValidator
              margin="normal"
              required
              fullWidth
              name="password"
              value={password}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              validators={['required', 'isPassword']}
              errorMessages={['this field is required', 'Password is not valid']}
              onChange={(e) => setPassword(e.target.value)}
              
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
            disabled={email.length && password.length?false:true}
              onClick={(e) => clickHandler(e)}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </ValidatorForm>
        </Box>
        {isError && <Alert variant="outlined" severity="error">
        error occured due to wrong credentials!
                    </Alert>}
      </Container>
    </ThemeProvider>
  );
}
