import React from 'react';
import ContactPhrase from '../../components/HeaderPhrase/ContactUs';
import { Container } from '../container';
import '../../styles/components/constactHeader.scss';


const Header = () => {
    return (
        <header className='contactheader'>
            <Container>
                <ContactPhrase />
            </Container>
        </header>
    )
}

export default Header
