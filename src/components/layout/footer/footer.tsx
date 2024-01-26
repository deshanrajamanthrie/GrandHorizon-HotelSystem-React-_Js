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
                            <aside>
                                <i>*</i>
                                <i>*</i>
                                <i>*</i>
                                <i>*</i>
                            </aside>
                        </div>
                        <div>
                            <h3 className={'footer-MainText'}>Get in your inbox</h3>
                            <div>
                                <button>Email</button>
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