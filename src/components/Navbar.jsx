import * as ReactBootStrap from 'react-bootstrap';
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Navbar() {
    return (
        <div>
             <ReactBootStrap.Navbar fixed="top" className="color-nav" collapseOnSelect expand="lg" variant="green" >
  <ReactBootStrap.Navbar.Brand href="#home">yKarimi</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
    
     
    </ReactBootStrap.Nav>

    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link cl href="#deets"> <FaGithub/></ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link cl eventKey={2} href="#memes">
      <FaLinkedin/>
      </ReactBootStrap.Nav.Link>

    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default Navbar
