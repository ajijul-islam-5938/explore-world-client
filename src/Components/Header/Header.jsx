import React from 'react';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { useContext } from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

function AppAppBar({ mode }) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const mobileMenu = (
        <div>
            <MenuItem>
                <NavLink to="/">Home</NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to="/touriestspots">All tourist spot</NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to="/addtouriestspots">Add tourist spot</NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to="/mylist">My list</NavLink>
            </MenuItem>
        </div>
    );

    const tabMenu = (
        <div className="flex items-center ml-2">
            <MenuItem>
                <NavLink to="/">
                    <Typography variant="body2" color="text.primary">
                        Home
                    </Typography>
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to="/touriestspots">
                    <Typography variant="body2" color="text.primary">
                        All tourist spot
                    </Typography>
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to="/addtouriestspots">
                    <Typography variant="body2" color="text.primary">
                        Add tourist spot
                    </Typography>
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to="/mylist">
                    <Typography variant="body2" color="text.primary">
                        My list
                    </Typography>
                </NavLink>
            </MenuItem>
        </div>
    );

    const { user, signOutUser } = useContext(AuthContext);

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    mt: 0,
                }}
            >
                <Toolbar
                    variant="regular"
                    sx={(theme) => ({
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexShrink: 0,
                        bgcolor:
                            theme.palette.mode === 'light'
                                ? 'rgba(255, 255, 255, 0.4)'
                                : 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(24px)',
                        maxHeight: 40,
                        border: '1px solid',
                        borderColor: 'divider',
                        boxShadow:
                            theme.palette.mode === 'light'
                                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                                : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
                    })}
                >
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            alignItems: 'center',
                            ml: '-18px',
                            px: 0,
                        }}
                    >
                        <Link to="/">
                            <h2 className="text-lg md:text-2xl font-semibold text-zinc-900 ml-3">Explore World</h2>
                        </Link>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>{tabMenu}</Box>
                    </Box>

                    {user ? (
                        <div className="flex items-center">
                            <div className="hidden md:block">
                                <Button color="secondary" variant="contained" size="small" onClick={signOutUser}>
                                    Sign out
                                </Button>
                            </div>
                            <a data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
                                <img
                                    className="ml-3 h-7 w-7 md:w-10 md:h-10 rounded-full border"
                                    alt="Remy Sharp"
                                    src={user.photoURL}
                                />
                                <Tooltip id="my-tooltip" />
                            </a>
                        </div>
                    ) : (
                        <div>
                            <Box
                                sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    gap: 0.5,
                                    alignItems: 'center',
                                }}
                            >
                                <Button color="primary" variant="text" size="small" component="a">
                                    <Link to="/login">Sign in</Link>
                                </Button>
                                <Button color="primary" variant="contained" size="small" component="a">
                                    <Link to="/register">Sign up</Link>
                                </Button>
                            </Box>
                        </div>
                    )}

                    <Box sx={{ display: { sm: '', md: 'none' } }}>
                        <Button
                            variant="text"
                            color="primary"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            sx={{ minWidth: '30px', p: '4px' }}
                        >
                            <MenuIcon />
                        </Button>
                        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                            <Box
                                sx={{
                                    minWidth: '60dvw',
                                    p: 2,
                                    backgroundColor: 'background.paper',
                                    flexGrow: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'end',
                                        flexGrow: 1,
                                    }}
                                ></Box>
                                {mobileMenu}
                                {user ? (
                                    <div className="">
                                        <div className="block md:hidden">
                                            <MenuItem>
                                                <Button
                                                    color="secondary"
                                                    variant="contained"
                                                    size="small"
                                                    sx={{ width: '100%' }}
                                                    onClick={signOutUser}
                                                >
                                                    Sign out
                                                </Button>
                                            </MenuItem>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="">
                                        <MenuItem>
                                            <Button color="primary" variant="contained" component="a" sx={{ width: '100%' }}>
                                                <Link to="/register">Sign up</Link>
                                            </Button>
                                        </MenuItem>
                                        <MenuItem>
                                            <Button
                                                color="primary"
                                                variant="outlined"
                                                component="a"
                                                sx={{ width: '100%' }}
                                            >
                                                <Link to="/login">Sign in</Link>
                                            </Button>
                                        </MenuItem>
                                    </div>
                                )}
                            </Box>
                        </Drawer>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppAppBar;
