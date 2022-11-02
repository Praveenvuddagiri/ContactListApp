import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Container } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import '../CSS/HomePage.css';
import Contact from './Contact';
function HomePage() {
    return (
            <div className='home'>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            sx={{ mr: 1.5 }}
                        >
                            <ContactsIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Contacts List
                        </Typography>
                        <Button color="error" variant="contained">Logout</Button>
                    </Toolbar>
                </AppBar>
                <Container fixed>
                    <div className='home__contact'>
                        <Contact />
                        <Contact />
                        <Contact />
                        <Contact />
                        <Contact />
                        <Contact />
                        <Contact />
                        <Contact />
                    </div>
                </Container>
            </div>
    );
}

export default HomePage
