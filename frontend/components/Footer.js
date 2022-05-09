
const Footer = () => {
      
    return (
        <footer className="footer py-4">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-4 text-center">Copyright &copy; {process.env.PNAME} {new Date().getFullYear()}</div>
                    <div className="col-lg-4 "> 
                        <div className="d-flex flex-row justify-content-center ">
                            <div class="icon-container ">
                                <a className="btn"><span class="eicon-facebook"></span></a>
                            </div>
                            <div class="icon-container ">
                                <a className="btn"><span class="eicon-twitter"></span></a>
                            </div>
                            <div class="icon-container ">
                                <a className="btn"><span class="eicon-linkedin"></span></a>
                            </div>
                        </div>
                    </div> 
                    <div className="col-lg-4 text-center">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;