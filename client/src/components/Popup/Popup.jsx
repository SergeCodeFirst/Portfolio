import '../../views/GeneralStyle/GeneralStyle.css'
import '../Popup/Popup.css'

const Popup = (props) => {
    const closePopup = () => {
        document.querySelector(".portfolio-popup").classList.toggle("open");
        document.querySelector(".main").classList.toggle("fade-out");
    }

    return <div>
        {/* Portfolio Items Details Popup Start  */}
        <div className="portfolio-popup">
            <div className="pp-inner ">
                <div className="pp-content">
                    <div className="pp-header">
                        <button type="button" className="btn pp-close" onClick={closePopup}><i className="fas fa-times"></i></button>
                        <div className="pp-thumbnail">
                            <img className="image" src="/images/img/portfolio/1.jpg" alt="Project Thumbnail"></img>
                        </div>
                        <h3>Personale wesite</h3>
                    </div>
                    <div className="pp-body">
                        {/* <div className="description">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, aut? Aliquid esse a iure corporis illo modi soluta quidem enim nesciunt accusantium optio, cum commodi amet maiores fuga eius quibusdam odit aspernatur minima quis tenetur temporibus autem ullam. Voluptate, eveniet?</p>
                        </div>
                        <div className="general-info">
                            <ul>
                                <li> Created - <span>4 Dec 2020</span></li>
                                <li> Technologies Used - <span>Html, Css, Bootstrap 4</span></li>
                                <li> Role - <span>Frontend</span></li>
                                <li> View Live - <span><a href="www.domain.com" target="_blank">www.domain.com</a></span></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        {/* Portfolio Items Details Popup End  */}

    </div>
}

export default Popup;