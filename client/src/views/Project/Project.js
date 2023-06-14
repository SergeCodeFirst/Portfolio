import '../GeneralStyle/GeneralStyle.css'
import '../Project/Project.css'


const Project = (props) => {
    var btnStyle = {
        padding:"13px 28px"
    }

    const togglePortfolioPopup = (event) => {
        // console.log(event.target.parentElement);
        document.querySelector(".portfolio-popup").classList.toggle("open");
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(event.target.parentElement)
        document.querySelector(".main").classList.toggle("fade-out");
    }

    const portfolioItemDetails = (portfolioItem) => {
        // console.log(portfolioItem);
        // get image src
        document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
        // get title (h3)
        document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".portfolio-item h3").innerHTML;
        // get desc and other
        document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
    }

    return <div>
        {/* Portfolio Section Start */}
        <section className="portfolio-section sec-padding">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Recent Work</h2>
                    </div>
                </div>

                <div className="row justify-content-space-around">
                    {/* Portfolio Item Start  */}
                    <div className="portfolio-item">
                        <div className="portfolio-item-thumbnail">
                            <img className="image" src="/images/img/portfolio/1.jpg" alt="project thumbnail"></img>
                        </div>
                        <h3 className="portfolio-item-title">Not Education Course Website</h3>
                        <button style={btnStyle} type="button" className="btn view-project-btn" onClick={togglePortfolioPopup}>View Project</button>
                        <div className="portfolio-item-details">
                            <div className="description">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, aut? Aliquid esse a iure corporis illo modi soluta quidem enim nesciunt accusantium optio, cum commodi amet maiores fuga eius quibusdam odit aspernatur minima quis tenetur temporibus autem ullam. Voluptate, eveniet?</p>
                            </div>
                            <div className="general-info">
                                <ul>
                                    <li> Created - <span>4 Dec 2020</span></li>
                                    <li> Technologies Used - <span>Html, Css, Bootstrap 4</span></li>
                                    <li> Role - <span>Frontend</span></li>
                                    <li> View Live - <span><a href="www.domain.com" target="_blank">www.domain.com</a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio Item End */}

                    {/* Portfolio Item Start  */}
                    <div className="portfolio-item">
                        <div className="portfolio-item-thumbnail">
                            <img className="image" src="/images/img/portfolio/2.jpg" alt="project thumbnail"></img>
                        </div>
                        <h3 className="portfolio-item-title">Insurance Company Website</h3>
                        <button style={btnStyle} type="button" className="btn view-project-btn" onClick={togglePortfolioPopup}>View Project</button>
                        <div className="portfolio-item-details">
                            <div className="description">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, aut? Aliquid esse a iure corporis illo modi soluta quidem enim nesciunt accusantium optio, cum commodi amet maiores fuga eius quibusdam odit aspernatur minima quis tenetur temporibus autem ullam. Voluptate, eveniet?</p>
                            </div>
                            <div className="general-info">
                                <ul>
                                    <li> Created - <span>4 Dec 2020</span></li>
                                    <li> Technologies Used - <span>Html, Css, Bootstrap 4</span></li>
                                    <li> Role - <span>Frontend</span></li>
                                    <li> View Live - <span><a href="www.domain.com" target="_blank">www.domain.com</a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio Item End */}

                    {/* Portfolio Item Start  */}
                    <div className="portfolio-item">
                        <div className="portfolio-item-thumbnail">
                            <img className="image" src="/images/img/portfolio/3.jpg" alt="project thumbnail"></img>
                        </div>
                        <h3 className="portfolio-item-title">Social Media Website</h3>
                        <button style={btnStyle} type="button" className="btn view-project-btn" onClick={togglePortfolioPopup}>View Project</button>
                        <div className="portfolio-item-details">
                            <div className="description">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, aut? Aliquid esse a iure corporis illo modi soluta quidem enim nesciunt accusantium optio, cum commodi amet maiores fuga eius quibusdam odit aspernatur minima quis tenetur temporibus autem ullam. Voluptate, eveniet?</p>
                            </div>
                            <div className="general-info">
                                <ul>
                                    <li> Created - <span>4 Dec 2020</span></li>
                                    <li> Technologies Used - <span>Html, Css, Bootstrap 4</span></li>
                                    <li> Role - <span>Frontend</span></li>
                                    <li> View Live - <span><a href="www.domain.com" target="_blank">www.domain.com</a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio Item End */}

                    {/* Portfolio Item Start  */}
                    <div className="portfolio-item">
                        <div className="portfolio-item-thumbnail">
                            <img className="image" src="/images/img/portfolio/4.jpg" alt="project thumbnail"></img>
                        </div>
                        <h3 className="portfolio-item-title">Education Course Website</h3>
                        <button style={btnStyle} type="button" className="btn view-project-btn" onClick={togglePortfolioPopup}>View Project</button>
                        <div className="portfolio-item-details">
                            <div className="description">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, aut? Aliquid esse a iure corporis illo modi soluta quidem enim nesciunt accusantium optio, cum commodi amet maiores fuga eius quibusdam odit aspernatur minima quis tenetur temporibus autem ullam. Voluptate, eveniet?</p>
                            </div>
                            <div className="general-info">
                                <ul>
                                    <li> Created - <span>4 Dec 2020</span></li>
                                    <li> Technologies Used - <span>Html, Css, java </span></li>
                                    <li> Role - <span>Frontend</span></li>
                                    <li> View Live - <span><a href="www.domain.com" target="_blank">www.domain.com</a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio Item End */}

                    {/* Portfolio Item Start  */}
                    <div className="portfolio-item">
                        <div className="portfolio-item-thumbnail">
                            <img className="image" src="/images/img/portfolio/5.jpg" alt="project thumbnail"></img>
                        </div>
                        <h3 className="portfolio-item-title">Ecommerse Website</h3>
                        <button style={btnStyle} type="button" className="btn view-project-btn" onClick={togglePortfolioPopup}>View Project</button>
                        <div className="portfolio-item-details">
                            <div className="description">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, aut? Aliquid esse a iure corporis illo modi soluta quidem enim nesciunt accusantium optio, cum commodi amet maiores fuga eius quibusdam odit aspernatur minima quis tenetur temporibus autem ullam. Voluptate, eveniet?</p>
                            </div>
                            <div className="general-info">
                                <ul>
                                    <li> Created - <span>4 Dec 2020</span></li>
                                    <li> Technologies Used - <span>Html, Css, c#</span></li>
                                    <li> Role - <span>Frontend</span></li>
                                    <li> View Live - <span><a href="www.domain.com" target="_blank">www.domain.com</a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio Item End */}

                    {/* Portfolio Item Start  */}
                    <div className="portfolio-item">
                        <div className="portfolio-item-thumbnail">
                            <img className="image" src="/images/img/portfolio/6.jpg" alt="project thumbnail"></img>
                        </div>
                        <h3 className="portfolio-item-title">Education Course Website</h3>
                        <button style={btnStyle} type="button" className="btn view-project-btn" onClick={togglePortfolioPopup}>View Project</button>
                        <div className="portfolio-item-details">
                            <div className="description">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, aut? Aliquid esse a iure corporis illo modi soluta quidem enim nesciunt accusantium optio, cum commodi amet maiores fuga eius quibusdam odit aspernatur minima quis tenetur temporibus autem ullam. Voluptate, eveniet?</p>
                            </div>
                            <div className="general-info">
                                <ul>
                                    <li> Created - <span>4 Dec 2020</span></li>
                                    <li> Technologies Used - <span>Html, Css, Bootstrap 4</span></li>
                                    <li> Role - <span>Frontend</span></li>
                                    <li> View Live - <span><a href="www.domain.com" target="_blank">www.domain.com</a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio Item End */}
                </div>

            </div>
        </section>
        {/* Portfolio Section End */}
    </div>
}


export default Project;