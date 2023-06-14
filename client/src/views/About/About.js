import '../GeneralStyle/GeneralStyle.css';
import '../About/About.css';


import Button from '../../components/Button/Button';

const About = (props) => {
    const activeToggleHandler = (event) => {
        const tabsContainer = document.querySelector(".about-tabs");
        const aboutSection = document.querySelector(".about-section");

        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
            tabsContainer.querySelector(".active").classList.remove("active");
            event.target.classList.add("active");
    
            const target = event.target.getAttribute("data-target");
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            aboutSection.querySelector(target).classList.add("active");
        }
    }
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
                        <p>Lorem ipsum dolor sit amet consectetur r adipisicing elit. Aliquid asperiores aspernatur fuga facere et ex sapiente provident vero, non voluptate consequuntur ullam ea ipsa optio? Quibusdam fugiat odit vel a iste velit ipsa impedit quasi harum! Neque provident veritatis sed voluptatibus sequi atque! Rem necessitatibus alias officia deleniti repellendus temporibus!</p>
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

                        <div className="about-tabs" >
                            <button type="button" className="tab-item button active" data-target="#education" onClick={activeToggleHandler}>Education</button>
                            <button type="button" className="tab-item button" data-target="#experience" onClick={activeToggleHandler}>Experience</button>
                        </div>

                        {/* Education start */}
                        <div className="tab-content active" id="education">
                            <div className="timeline">
                                <div className="timeline-item">
                                    <span className="date">2013 - 2016</span>
                                    <h4>Bachelor of technology - <span>Todfod University</span></h4>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime architecto saepe quam aliquid voluptates exercitationem.</p>
                                </div>
                                
                                <div className="timeline-item">
                                    <span className="date">2013 - 2016</span>
                                    <h4>Bachelor of technology - <span>Todfod University</span></h4>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime architecto saepe quam aliquid voluptates exercitationem.</p>
                                </div>
                                
                                <div className="timeline-item">
                                    <span className="date">2013 - 2016</span>
                                    <h4>Bachelor of technology - <span>Todfod University</span></h4>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime architecto saepe quam aliquid voluptates exercitationem.</p>
                                </div>
                            </div>
                        </div>

                        {/* Education end */}

                        {/* Experience Start  */}
                        <div className="tab-content" id="experience">
                            <div className="timeline">
                                <div className="timeline-item">
                                    <span className="date"> 2013 - 2014</span>
                                    <h4>Web Developper - <span>The webshala</span></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi voluptatibus quo veniam excepturi delectus doloremque.</p>
                                </div>

                                <div className="timeline-item">
                                    <span className="date"> 2013 - 2014</span>
                                    <h4>Web Developper - <span>The webshala</span></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi voluptatibus quo veniam excepturi delectus doloremque.</p>
                                </div>

                                <div className="timeline-item">
                                    <span className="date"> 2013 - 2014</span>
                                    <h4>Web Developper - <span>The webshala</span></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi voluptatibus quo veniam excepturi delectus doloremque.</p>
                                </div>
                            </div>
                        </div>

                        {/* Experience End  */}

                        {/* Button Start */}
                        <div className='buttons'>
                            <Button text='Download Cv' path="/"/>
                            <Button text='Contact Me' path="#"/>
                        </div>
                        {/* Button End */}
                    </div>
                </div>
            </div>
        </section>

        {/* About Section End */}
    </div>
}

export default About;