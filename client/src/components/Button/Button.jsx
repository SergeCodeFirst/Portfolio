import '../Button/Button.css'
import { Link } from 'react-router-dom';

const Button = (props) => {
    return <div>
        <Link to={props.path} target={props.target} className="btn a">{props.text}</Link>
    </div>
}

export default Button;