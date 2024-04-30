import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FaGoogle, FaGithub, FaRegEye, FaEyeSlash } from 'react-icons/fa';
import { Divider } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

export default function SignIn() {
  const [show, setShow] = React.useState(false);
  const { signInGoogle, signInWithEmailPassword,signInGithub } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmailPassword(email,password);
  }

  return (
    <Container component="main" maxWidth="sm" className='border my-20'>
      <CssBaseline />
      <Box className="w-full" sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
        <Typography component="h1" variant="h5">Sign in</Typography>
        <form className='w-full' onSubmit={handleLogin}>
          <Box className='w-[95%]' sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <div className="relative">
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={show ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
              />
              <span onClick={() => setShow(!show)} style={{ cursor: 'pointer' }} className='absolute top-9 right-5'>
                {show ? <FaEyeSlash /> : <FaRegEye />}
              </span>
            </div>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container className='text-xS flex justify-between items-center gap-5'>
              <Grid item>
                <p>Don't have account? <Link className="text-blue-500 underline" to="/register">sign up</Link></p>
              </Grid>
            </Grid>
            <Divider className='my-2'>or</Divider>
            <div className='grid grid-cols-2 gap-5 my-3'>
              <Button onClick={() => signInGoogle()} variant="outlined" startIcon={<FaGoogle />}>
                Sign In with Google
              </Button>
              <Button onClick={()=>signInGithub()} variant="outlined" startIcon={<FaGithub />}>
                Sign In with Github
              </Button>
            </div>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
