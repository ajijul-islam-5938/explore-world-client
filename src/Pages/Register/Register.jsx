import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FaGoogle, FaGithub, FaRegEye, FaEyeSlash } from 'react-icons/fa';
import { Divider, Grid } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';

export default function Register() {
  const [show, setShow] = React.useState(false);
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    createUser(email,password,name,photoURL)
  }
  return (
    <Container component="main" maxWidth="sm" className='border my-20'>
      <CssBaseline />
      <Box className="w-full" sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
        <Typography component="h1" variant="h5">Register</Typography>
        <form className='w-full' onSubmit={handleSignUp}>
          <Box className='w-[95%]' sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <div className="relative">
              <TextField
                margin="normal"
                required
                fullWidth
                name="photoURL"
                label="PhotoURL"
                type="text"
                autoComplete="PhotoURL"
              />
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container className='text-xS flex justify-between items-center gap-5'>
            </Grid>
            
          </Box>
        </form>
      </Box>
    </Container>
  );
}
