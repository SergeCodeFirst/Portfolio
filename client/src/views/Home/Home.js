import '../GeneralStyle/GeneralStyle.css'
import '../Home/Home.css'

import Button from '../../components/Button/Button';

const Home = (props) => {
    return <div>
        {/* <!-- Home Section start --> */}
        <section className={props.sectionOn? "home-section align-item-center active" : "home-section align-item-center fade-out "}>
            <div className="container">
                <div className="row align-item-center">
                    <div className="home-text">
                        <p>Hello, I'm</p>
                        <h1>John doe</h1>
                        <h2>frontend Web developer</h2>
                        <div className='buttons'>
                            <Button text='More About Me' path="/about"/>
                            <Button text='Portfolio' path="/portfolio"/>
                        </div>
                    </div>
                    <div className="home-img">
                        <div className="img-box">
                            <img src="/images/img/profile-img.png" alt="profile pic" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Home Section end --> */}
    </div>
}

export default Home;