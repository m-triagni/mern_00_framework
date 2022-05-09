/*
import { isAuth, logout, user_role, getCookie} from '@myproject/utils/auth'  
*/

import getConfig from 'next/config';
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const api = publicRuntimeConfig.API_ENDPOINT;
import { listPage } from '@myproject/configs/ListPage';
import { listEnum } from '@myproject/configs/ListEnum';

 
const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-color" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top">
                    Freelance Service
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li> 
                        <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                        <li className="nav-item">
                            <a className="btn btn-outline btn-on-hover ms-3">Sign In</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-primary btn-fill btn-on-hover ms-3" href={listPage.Page_Customer_Auth_Registration}>Sign Up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;