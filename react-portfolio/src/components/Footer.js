import { Card} from "react-bootstrap"
import { FaGithub} from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";

function Footer() {
    return (
        <Card className="text-center" style={{ width: "20%" }} >
       
            <Card.Body>
                
            <Card.Link href="https://github.com/fasicasr"><FaGithub/></Card.Link>
            <Card.Link href="https://www.linkedin.com/in/fasicasr"><FaLinkedin/></Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Footer;