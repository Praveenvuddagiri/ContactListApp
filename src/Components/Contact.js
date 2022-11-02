import React from 'react';
import '../CSS/Contact.css';
import { Avatar } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
function Contact() {
    return (
        <div class="contact">
            <div class="contact__content">
                <div class="contact__image">
                    <Avatar className="contact__avatar" src="https://picsum.photos/200"
                        sx={{ width: 100, height: 100 }} />
                </div>
                <div class="contact__about">
                    <div className='contact__name'>
                        <h2>Praveen Vuddagiri</h2>
                        <p>Port Blair</p>
                    </div>
                    <div className='contact__details'>
                        <p>
                            <MailIcon className='contact__icons'/>
                            <span>
                                vuddagiripraveen@gmail.com
                            </span>
                        </p>
                        <p>
                            <PhoneIcon className='contact__icons'/>
                            <span>
                                7337426989
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;
