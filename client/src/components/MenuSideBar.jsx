import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const MenuSideBar = () => {
   return (
     <Navbar bg="light" expand="lg" className="flex-column vh-100 p-3">
       <Container fluid className="d-flex flex-column align-items-start">
 
         <Navbar.Brand href="/" className="mb-4">
           LitePOS
         </Navbar.Brand>

      
         <Navbar.Toggle aria-controls="sidebar-nav" />
         <Navbar.Collapse id="sidebar-nav">
           <Nav className="flex-column">
             <Nav.Link as={Link} to="/Home">
               Home
             </Nav.Link>
             <Nav.Link as={Link} to="/inventory">
               Inventory
             </Nav.Link>
             <Nav.Link as={Link} to="/transactions">
               Transactions
             </Nav.Link>
             <Nav.Link as={Link} to="/users">
               Users
             </Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
   );
    
};

export default MenuSideBar;
