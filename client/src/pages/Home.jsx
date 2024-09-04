import React from 'react'
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
const Home = () => {
   return (
     <Container fluid>
       <Row className="mb-4">
         <Col md={4}>
           <Card>
             <Card.Body>
               <Card.Title>Total Sales</Card.Title>
               <Card.Text>$10,000</Card.Text>
             </Card.Body>
           </Card>
         </Col>
         <Col md={4}>
           <Card>
             <Card.Body>
               <Card.Title>Inventory Items</Card.Title>
               <Card.Text>150 Items</Card.Text>
             </Card.Body>
           </Card>
         </Col>
         <Col md={4}>
           <Card>
             <Card.Body>
               <Card.Title>Low Stock Alerts</Card.Title>
               <Card.Text>5 Items</Card.Text>
             </Card.Body>
           </Card>
         </Col>
       </Row>

       <Row className="mb-4">
         <Col md={8}>
           <Card>
             <Card.Header>Recent Transactions</Card.Header>
             <Card.Body>
               <Table striped bordered hover>
                 <thead>
                   <tr>
                     <th>#</th>
                     <th>Date</th>
                     <th>Items</th>
                     <th>Total</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td>1</td>
                     <td>2024-09-04</td>
                     <td>Item 1, Item 2</td>
                     <td>$100</td>
                   </tr>
                 </tbody>
               </Table>
             </Card.Body>
           </Card>
         </Col>

       
         <Col md={4}>
           <Card>
             <Card.Header>Quick Actions</Card.Header>
             <Card.Body>
               <Button variant="primary" className="mb-3" block="true">
                 Add New Item
               </Button>
               <Button variant="success" className="mb-3" block="true">
                 Process Sale
               </Button>
               <Button variant="info" block="true">
                 Manage Inventory
               </Button>
             </Card.Body>
           </Card>
         </Col>
       </Row>

       <Row>
         {/* Sales Graph (placeholder) */}
         <Col md={12}>
           <Card>
             <Card.Header>Sales Overview</Card.Header>
             <Card.Body>
               {/* Include your graph/chart component here */}
               <div className="text-center">[Sales Graph Placeholder]</div>
             </Card.Body>
           </Card>
         </Col>
       </Row>
     </Container>
   );
}

export default Home
