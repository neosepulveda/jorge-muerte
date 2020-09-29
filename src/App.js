import React, { useState } from 'react';
import { Formik } from "formik"
import * as Yup from 'yup';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Form, Modal } from "react-bootstrap"

function App() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        <Formik
          initialValues={{ name: '', age: '' }}
          validationSchema={
            Yup.object({
              name: Yup.string().required('Required'),
              age: Yup.number().required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              handleShow()
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body className="d-flex justify-content-center align-items-center text-center display-3" style={{ minHeight: "6rem" }}>{(values.name === "Jorge" && values.age === 30) ? "Jorge, parece que te vas a morir pasado mañana" : `Puedes estar tranquilo/a, ${values.name}`}</Modal.Body>
                <Modal.Footer>
                  <Button variant="outline-secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              <Form  onSubmit={handleSubmit}>
                <Form.Group controlId="formBasic">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name} />
                </Form.Group>
              
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="number" name="age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age} />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button variant="primary" type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                </div>
              </Form>
            </>
          )}
          </Formik>
        </div>
      </div>
  );
}

export default App;
