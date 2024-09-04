import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import {
  useGetInventoryQuery,
  useAddItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} from "../slices/inventotyApiSlice";
import "../App.css"; // Import the CSS file

const Inventory = () => {
  const { data, isLoading, isError } = useGetInventoryQuery();
  console.log(data);

  const inventory = data;
  console.log({ inventory, isLoading, isError });

  const [addItem] = useAddItemMutation();
  const [updateItem] = useUpdateItemMutation();
  const [deleteItem] = useDeleteItemMutation();

  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const handleShow = (item = null) => {
    setCurrentItem(item);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setCurrentItem(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, quantity, price } = event.target.elements;

    const itemData = {
      name: name.value,
      quantity: quantity.value,
      price: price.value,
    };

    if (currentItem) {
      await updateItem({ id: currentItem._id, ...itemData });
    } else {
      await addItem(itemData);
    }

    handleClose();
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading inventory</p>;

  return (
    <Container>
      <h1 className="mb-4">Inventory Management</h1>
      <Button variant="primary" onClick={() => handleShow()} className="mb-3">
        Add New Item
      </Button>

      <Row>
        {inventory?.map((item) => (
          <Col key={item._id} sm={12} md={6} lg={4} className="mb-4">
            <Card className="card">
              <Card.Header className="card-header">{item.name}</Card.Header>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  Quantity: {item.quantity}
                  <br />
                  Price: ${item.price}
                </Card.Text>
                <Button
                  variant="info"
                  onClick={() => handleShow(item)}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(item._id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentItem ? "Edit Item" : "Add New Item"}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue={currentItem ? currentItem.name : ""}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                defaultValue={currentItem ? currentItem.quantity : ""}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                name="price"
                defaultValue={currentItem ? currentItem.price : ""}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {currentItem ? "Update" : "Add"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default Inventory;
