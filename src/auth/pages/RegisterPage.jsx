import { Link as RouterLink } from "react-router-dom";
import { Google, Margin } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
      <AuthLayout title="Create una cuenta">
        <form>
            <Grid container>
              <Grid item xs={12} sx={{ mt:2}}>
                <TextField label="Nombre completo" type="text" placeholder="Emanuel FMDC" fullWidth/>
              </Grid>
              <Grid item xs={12} sx={{ mt:2}}>
                <TextField label="Correo" type="email" placeholder="correo@google.com" fullWidth/>
              </Grid>
              <Grid item xs={12} sx={{ marginTop:2}}>
                <TextField label="Contraseña" type="password" placeholder="1234" fullWidth/>
              </Grid>
              <Grid container spacing={2} sx={{ mb:2, mt:1 }}>
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth>Register</Button>
                </Grid>
              </Grid>
  
              <Grid container direction='row' justifyContent='end'>
                <Typography sx={{ mr:1 }}>¿Ya tienes una cuenta?</Typography>
                <Link component={RouterLink} color="inherit" to="/auth/login">
                  Ingresar
                </Link>
              </Grid>
              
            </Grid>
          </form>
      </AuthLayout>
  )
}
