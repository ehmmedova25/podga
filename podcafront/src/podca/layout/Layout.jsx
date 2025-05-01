import React from 'react';
import { Outlet } from 'react-router'; 
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <div>
   

<Outlet/>
<Footer/>
    </div>
  );
};

export default Layout;
