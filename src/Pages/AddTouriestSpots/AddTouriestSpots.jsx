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
import { Divider } from '@mui/material';

export default function AddTouriestSpots() {
  const [show, setShow] = React.useState(false);

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
        <Typography component="h1" variant="h5">Add tourist spot</Typography>
        <Box className='w-[95%] grid grid-cols-2 md:grid-cols-3 gap-5' >
          <TextField
            margin="normal"
            required
            fullWidth
            label="Spot Name"
            name="spotName"
            autoComplete="Spot Name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="PhotoURL"
            name="photoURL"
            autoComplete="PhotoURL"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Photo Url"
            name="email"
            autoComplete="photoUrl"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Spot Name"
            name="spotName"
            autoComplete="Spot Name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="PhotoURL"
            name="photoURL"
            autoComplete="PhotoURL"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Photo Url"
            name="email"
            autoComplete="photoUrl"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Spot Name"
            name="spotName"
            autoComplete="Spot Name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="PhotoURL"
            name="photoURL"
            autoComplete="PhotoURL"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Photo Url"
            name="email"
            autoComplete="photoUrl"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className='col-span-2 md:col-span-3'
          >
            Add Spot
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
