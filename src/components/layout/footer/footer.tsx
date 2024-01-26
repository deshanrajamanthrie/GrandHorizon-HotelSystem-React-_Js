import {Fragment} from "react";
import './footer.css'

const Footer = () => {
    return (
        <Fragment>
            <footer className={'vw-100 d-flex justify-content-center align-items-center footerHeight'}>
                <section className={'footerChild'}>
                    <section className={'footer-SubText'}>
                        <h3 className={'footer-MainText'}>About</h3>
                        <p>About Grand Horizon Hotel </p>
                        <p>Media & Associate</p>
                        <p>Gallery</p>
                        <p>Grand Horizon Group</p>
                        <p>Terms & Condition</p>
                        <p>Privacy Statement</p>
                    </section>
                    <section className={'footer-SubText'}>
                        <div>
                            <h3 className={'footer-MainText'}>Get In Touch</h3>
                            <p>Known Sri Lanka</p>
                            <p>Contact Us</p>
                            <p>FAQS</p>
                        </div>
                        <div>
                            <h3 className={'footer-MainText'}>Sections</h3>
                            <p>Careers</p>
                            <p>Blogs</p>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h3 className={'footer-MainText'}>Follow Us</h3>
                            <aside className={'d-flex justify-content-around align-items-center'}>
                                <img className={'socialMedia'} src="src/assets/facebook (2).png" alt="alt"/>
                                <img className={'socialMedia'} src="src/assets/linkedin (3).png" alt="alt2"/>
                                <img className={'socialMedia'} src="src/assets/twitter (1).png" alt="alt3"/>
                            </aside>
                        </div>
                        <div>
                            <h3 className={'footer-MainText'}>Get in your inbox</h3>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Type Your Email"
                                       aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                                <button className="btn btn-dark" type="button" id="button-addon1">SEND</button>
                            </div>
                            <div>
                                <p></p>
                            </div>
                        </div>

                    </section>
                </section>
            </footer>
        </Fragment>

    )

}
export default Footer;