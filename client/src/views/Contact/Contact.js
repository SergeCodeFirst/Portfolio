import '../GeneralStyle/GeneralStyle.css'
import '../Contact/Contact.css'


const Contact = (props) => {
    return <div>
        <section className={props.sectionOn ? "contact-section sec-padding active":  "contact-section sec-padding fade-out"}>
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Contact Me</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="contact-form">
                        <form>
                            <div className="row">
                                <div className="input-group">
                                    <input type="text" placeholder="Name" className="input-control" required></input>
                                </div>

                                <div className="input-group">
                                    <input type="text" placeholder="Email" className="input-control" required></input>
                                </div>

                                <div className="input-group">
                                    <input type="text" placeholder="Subject" className="input-control" required></input>
                                </div>

                                <div className="input-group">
                                    <textarea placeholder="Message" className="input-control" required></textarea>
                                </div>

                                <div className="submit-btn">
                                    <button type="submit" className="btn">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="contact-info">
                    <div className="contact-info-item">
                            <h3>Email</h3>
                            <p>example@gmail.com</p>
                        </div>

                        <div className="contact-info-item">
                            <h3>Location</h3>
                            <p>New York, New York</p>
                        </div>

                        <div className="contact-info-item">
                            <h3>Socials</h3>
                            <div className="social-links">
                                <a href="/contact" target="_blank"><i className="fab fa-linkedin"></i></a>
                                <a href="/contact" target="_blank"><i className="fab fa-github"></i></a>
                                <a href="/contact" target="_blank"><i className="fab fa-instagram"></i></a>
                                <a href="/contact" target="_blank"><i className="fab fa-youtube"></i></a>
                                <a href="/contact" target="_blank"><i className="fab fa-tiktok"></i></a>
                                <a href="/contact" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default Contact;