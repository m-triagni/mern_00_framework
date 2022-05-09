import Head from "next/head"
import Link from 'next/link'
import Router from 'next/router'
//import axios from 'axios'
//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'
import React, { useState, useEffect } from 'react';

import Nav from './Nav'
import Footer from './Footer'
/*
//Set route event for progress bar
Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = url => NProgress.done()
Router.onRouteChangeError = url => NProgress.done()
*/
const Layout = ({ children}) => {
      
    return (
        <React.Fragment> 
            <Nav /> {children} <Footer />
        </React.Fragment>
    );
}
 
export default Layout;