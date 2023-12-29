import { Link } from 'react-router-dom'
import './Button.scss'

const Button = () => {
    return (
        <div>
            <Link to="/home"><button className="btn__no">Não</button></Link>
            <button className="btn__yes">Sim</button>
        </div>
    )
}

export default Button