import '../Home/Home.css'
// import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const Home = (props) => {
    return <div>
        {/* <!-- Home Section start --> */}
        <section className="home-section align-item-center">
            <div className="container">
                <div className="row align-item-center">
                    <div className="home-text">
                        <p>Hello, I'm</p>
                        <h1>John doe.</h1>
                        <h2>frontend Web developer</h2>
                        <div className='buttons'>
                            <Button text='More About Me' path="/about"/>
                            <Button text='Portfolio' path="#"/>
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