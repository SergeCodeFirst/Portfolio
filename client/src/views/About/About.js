import '../GeneralStyle/GeneralStyle.css'
import '../About/About.css'

const About = (props) => {
    return <div>

        {/* About Section Start */}
        <section className='about-section sec-padding'>
            <div className='container'>
                <div className='row'>
                    <div className='section-title'>
                        <h2>About Me</h2>
                    </div>
                </div>
                <div className="row">
                <div className="about-img">
                        <div className="img-box">
                            <img src="/images/img/about-img.png" alt="About"></img>
                        </div>
                    </div>
                    <div className="about-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid asperiores aspernatur fuga facere et ex sapiente provident vero, non voluptate consequuntur ullam ea ipsa optio? Quibusdam fugiat odit vel a iste velit ipsa impedit quasi harum! Neque provident veritatis sed voluptatibus sequi atque! Rem necessitatibus alias officia deleniti repellendus temporibus!</p>
                        <h3>Skills</h3>
                        <div className="skills">
                            <div className="skill-item">Html</div>
                            <div className="skill-item">Css</div>
                            <div className="skill-item">Javascript</div>
                            <div className="skill-item">Bootstrap</div>
                            <div className="skill-item">Php</div>
                            <div className="skill-item">Java</div>
                            <div className="skill-item">Python</div>
                            <div className="skill-item">Wordpress</div>
                            <div className="skill-item">C</div>
                            <div className="skill-item">C++</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* About Section End */}
    </div>
}

export default About;