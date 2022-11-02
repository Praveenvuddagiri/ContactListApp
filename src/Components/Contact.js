import React from 'react';
import '../CSS/Contact.css';
import { Avatar } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
function Contact({phone,email,name,city,image}) {
    return (
        <div className="contact">
            <div className="contact__content">
                <div className="contact__image">
                    <Avatar className="contact__avatar" src={image}
                        sx={{ width: 100, height: 100 }} />
                </div>
                <div className="contact__about">
                    <div className='contact__name'>
                        <h2>{name}</h2>
                        <p>{city}</p>
                    </div>
                    <div className='contact__details'>
                        <p>
                            <MailIcon className='contact__icons'/>
                            <span>
                                {email}
                            </span>
                        </p>
                        <p>
                            <PhoneIcon className='contact__icons'/>
                            <span>
                                {phone}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;
