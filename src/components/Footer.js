import {Link} from "react-router-dom"
import { FaGithub } from "react-icons/fa"
const Footer =() => {
    return(
     <footer>
        <p>Copyright &copy; 2023 task tracker <FaGithub className="icon"/> </p>
        <Link to="/about">About</Link>
     </footer>
    )
}
export default Footer