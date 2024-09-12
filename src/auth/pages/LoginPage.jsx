import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"

import { AuthLayout } from "../layout/AuthLayout";

import { useForm } from "../../hooks";
import { checkingAuthentucation, startGoogleSingIn } from "../../store/auth";

export const LoginPage = () => {

  const dispatch = useDispatch()
  const {email, password, onInputChange} = useForm({
    email: 'Emanuel2303@egmail.com',
    password: '12345'
  });

  const onGoogleSingIng = () => {
    console.log('onGoogleSingIng');
    dispatch( startGoogleSingIn() );
    
  }

  const onSubmit = (e) => {
    e.preventDefault();
    
    console.log({ email, password })
    dispatch( checkingAuthentucation() );
  }
  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit }>
          <Grid container>
            <Grid item xs={12} sx={{ mt:2}}>
              <TextField label="Correo" type="email" placeholder="correo@google.com" fullWidth name="email" value={ email } onChange={onInputChange}/>
            </Grid>
            <Grid item xs={12} sx={{ marginTop:2}}>
              <TextField label="Contraseña" type="password" placeholder="1234" fullWidth name="password" value={ password } onChange={onInputChange}/>
            </Grid>
            <Grid container spacing={2} sx={{ mb:2, mt:1 }}>
              <Grid item xs={12} sm={ 6 }>
                <Button type="submit" variant="contained" fullWidth>Login</Button>
              </Grid>
              <Grid item xs={12} sm={ 6 }>
                <Button onClick={ onGoogleSingIng } variant="contained" fullWidth>
                  <Google/>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>
            
          </Grid>
        </form>
    </AuthLayout>
        
  )
}
