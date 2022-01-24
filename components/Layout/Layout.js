import React from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Container } from 'semantic-ui-react';

export default function Layout({children}) {
  return <div className='layout'>
    <Container>
    <Navbar/>
 
 {children}

 <Footer/>
    </Container>

  </div>;
}
