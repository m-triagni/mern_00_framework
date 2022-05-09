
import Layout from '@myproject/components/Layout'
import styles from "./index.module.scss"

export default function Home() {

    const header = () => {
        return (
            <header className={styles.masthead} >
                <div className="container" >
                    <h2>Welcome To Our Freelance Services !</h2>
                    <h3 className='text-uppercase'>Make appointment to our services is so easy</h3>
                    <a className="btn btn-primary btn-xl text-uppercase" href="#services">Schedule a service</a>
                </div>
            </header>
        )
    }

    const services = () => {
        return (
            <section className={styles.pageSection} id="services">
                <div className="container">
                    <div className="text-center pt-5">
                        <h2 className={styles.pageSectionH2}>Services</h2>
                        <h3 className={`${styles.pageSectionH3} text-muted`}>Welcome to our services. Pick a service and make appointment with our selected service provider.</h3>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <img src='assets/icons/cart.svg' width='100px'></img>
                            <h4 className="my-3">E-Commerce</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-4">
                            <img src='assets/icons/screen.svg' width='100px'></img>   
                            <h4 className="my-3">Responsive Design</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-4">
                            <img src='assets/icons/lock.svg' width='100px'></img> 
                            <h4 className="my-3">Web Security</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-4">
                            <img src='assets/icons/cart.svg' width='100px'></img> 
                            <h4 className="my-3">E-Commerce</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-4">
                            <img src='assets/icons/screen.svg' width='100px'></img>  
                            <h4 className="my-3">Responsive Design</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-4">
                            <img src='assets/icons/lock.svg' width='100px'></img>  
                            <h4 className="my-3">Web Security</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
 
    const teams = () => {
        return (
            <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center pt-5">
                    <h2 className={`${styles.pageSectionH2} text-uppercase`} >Our Amazing Team</h2>
                    <h3 className={`${styles.pageSectionH3} text-muted`} >Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className={`${styles.teamMember}`}> 
                            <img className="teamMember-img mx-auto rounded-circle teamMemberImg" src="assets/team/1.jpg" alt="..." />
                            <h4>Parveen Anand</h4>
                            <p className="text-muted">Lead Designer</p>
                            {teamSocialMedia()}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={styles.teamMember}>
                            <img className="teamMember-img mx-auto rounded-circle" src="assets/team/2.jpg" alt="..." />
                            <h4>Diana Petersen</h4>
                            <p className="text-muted">Lead Marketer</p>
                            {teamSocialMedia()}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={styles.teamMember}>
                            <img className="teamMember-img mx-auto rounded-circle" src="assets/team/3.jpg" alt="..." />
                            <h4>Larry Parker</h4>
                            <p className="text-muted">Lead Developer</p>
                            {teamSocialMedia()}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        )
    }

    const teamSocialMedia = () => {
        return <> 
            <div className="d-flex flex-row justify-content-center  "> 
                <a className="btn"><img src='assets/icons/facebook.svg' width='30px'></img></a> 
                <a className="btn"><img src='assets/icons/twitter.svg' width='33px'></img></a> 
                <a className="btn"><img src='assets/icons/linkedin.svg' width='33px'></img></a> 
            </div>
        </>
    }

    return (
    <>
          <Layout> 
            {header()}
            {services()}
            {teams()}
          </Layout>
    </>
    )
}