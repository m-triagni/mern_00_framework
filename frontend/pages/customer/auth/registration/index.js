
import getConfig from 'next/config';
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const api = publicRuntimeConfig.API_ENDPOINT;
import { listPage } from '@myproject/configs/ListPage';
import { listEnum } from '@myproject/configs/ListEnum';
import Layout from '@myproject/components/Layout';

//import './registration.scss'

export default function Registration() {
    
    const formName = () => {
        return <>
            <div class="row mb-3">
                <div class="col-md-6">
                    <div class="form-outline text-start text-muted">
                        <input type="text" id="form3Example1" class="form-control" placeholder='First name' />
                    </div>
                </div>
                <div class="col-md-6 text-start text-muted">
                    <div class="form-outline">
                         <input type="text" id="form3Example2" class="form-control" placeholder='Last name' /> 
                    </div>
                </div>
            </div>
        </>
    }

    const formEmail = () => {
        return <> 
            <div class="col-md-12 mb-3">
                <div class="form-outline  text-start text-muted">
                     <input type="email" id="form3Example3" class="form-control" placeholder='Email address'/>
                </div>
            </div>  
        </>
    }

    const formPassword = () => {
        return <>
            <div class="form-outline mb-3 text-start text-muted">
                 <input type="password" id="form3Example4" class="form-control" placeholder='Password'/>
            </div>
        </>
    }

    const formSubscribeNews = () => {
        return <> 
            <div class="form-check d-flex  mb-4"> 
                <input type="checkbox" className='newspaper-checkbox' id="todo" name="todo" value="todo"/>
                <label  className='ms-2 text-muted ' for="todo" data-content="Get out of bed">Subscribe to our newsletter</label >
            </div>
        </>
    }

    const formSubmitButton = () => {
        return <>
            <div class="d-grid mb-4">
                <button class="btn btn-primary" type="button">Sign Up</button>
            </div> 
        </>
    }

    const formRegisterWithSocialMedia = () => {
        return <>
            <div class="text-center">
                <hr class="my-4"></hr>
                <p className='text-muted'>or sign up with:</p>
                <button type="button" class="btn btn-link btn-floating mx-1 primary-3-color">
                    <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1 primary-3-color">
                    <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1 primary-3-color">
                    <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1 primary-3-color">
                    <i class="fab fa-github"></i>
                </button>
            </div>
        </>
    }

    return <> 
        <Layout>
        
            <div class="container py-4 ">
                <div class="row g-3 align-items-center ">
                    <div class="col-lg-6 align-self-start text-center"> 
                                <h2 class="fw-bold mb-5 text-uppercase">Sign Up Now</h2>
                                <form>
                                    {formName()}
                                    {formEmail()}                             
                                    {formPassword()} 
                                    {formSubscribeNews()} 
                                    {formSubmitButton()}
                                    {formRegisterWithSocialMedia()}
                                </form>
                            </div>

                    <div class="col-lg-6 mb-5 mb-lg-0 align-self-stretch">
                        <img src="/assets/img/signup.jpg" class="img-fluid"
                            alt="" />
                            <span className='text-muted'>
                            Photo by Kevin Bidwell from Pexels.com

                            </span>
                    </div> 
                    
                    </div>
                    </div>
        </Layout>
    </>
}