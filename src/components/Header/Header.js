import React from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import styles from './Header.module.css'

// icon from fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faSearch,faUserCircle,faHeart,faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className={styles.catagoris} href="#home">All Catagoris</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <input placeholder='Search hear....' className={styles.inputBox} type="text" />
                    <button><FontAwesomeIcon icon={faSearch} /></button>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">
                    <div>
                        <FontAwesomeIcon icon={faUserCircle} />
                        <p>account</p>
                    </div> 
                </Nav.Link>   
                <Nav.Link href="#deets">
                    <div>
                        <FontAwesomeIcon icon={faHeart} /> 
                        <p>account</p>
                    </div>
                </Nav.Link>                     
                <Nav.Link href="#deets">
                    <div>
                        <FontAwesomeIcon icon={faCartArrowDown} /> 
                        <p>account</p>
                    </div>
                </Nav.Link> 
                </Nav>
        </Navbar.Collapse>
</Navbar>
        </>
    );
};

export default Header;