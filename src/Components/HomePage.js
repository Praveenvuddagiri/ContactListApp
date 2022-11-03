import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Container } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import '../CSS/HomePage.css';
import Contact from './Contact';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CardSkeleton from './CardSkeleton';
import 'react-loading-skeleton/dist/skeleton.css'

function HomePage() {
    const [contact, setContact] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);
    const navigate = useNavigate();


    const loadMore = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setIsLoading(true);
            var num = parseInt(localStorage.getItem("pageNumber"))+1;
            setPageNumber(num);
            localStorage.setItem("pageNumber",num);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', loadMore, true);
        localStorage.setItem("pageNumber",1);
        if (!localStorage.getItem('userName')) {
            navigate('/');
        }
    }, []);


    


    useEffect(() => {
        axios.get(`https://randomuser.me/api/?page=${contact.length}&results=10&seed=abcd`)
            .then((response) => {
                var data = response.data.results.map((con) => {
                    return {
                        key: con.login.uuid,
                        phone: con.cell,
                        email: con.email,
                        name: (con.name.first + " " + con.name.last),
                        city: con.location.city,
                        image: con.picture.large,
                        location: con.location.coordinates
                    }
                })
                setContact([...contact,...data]);
                setIsLoading(false);
            });
    }, [pageNumber]);


    const logout = () => {
        localStorage.removeItem('userName');
        navigate('/');
    }
    return (
        <div className='home'>
            <AppBar position="fixed">
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

                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Welcome {localStorage.getItem('userName')}
                    </Typography>

                    <Button color="error" variant="contained" onClick={logout} >Logout</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <div className='home__contact'>
                    {isLoading && <CardSkeleton cards={9} />}

                    {contact.map((con) => (
                        <Contact
                            key={con.key}
                            phone={con.phone}
                            email={con.email}
                            name={con.name}
                            city={con.city}
                            image={con.image}
                            location={con.location}
                        />
                    ))}
                    {isLoading && <CardSkeleton cards={6} />}
                </div>
            </Container>
        </div>
    );
}

export default HomePage
