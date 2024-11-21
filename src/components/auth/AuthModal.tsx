import React, { useState } from "react";
import { Button, Modal, Tab, Tabs } from "react-bootstrap";
import styles from "./AuthModal.module.scss";
import Login from "../login/Login";
import Register from "../register/Register";

function AuthModal() {
  const [show, setShow] = useState(false);
  const [isActive, setIsActive] = useState("signin");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTabSelect = (tab: string | null) => {
    setIsActive(tab || "signin");
  };

  return (
    <>
      <Button onClick={handleShow} variant="dark">
        Sign in
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isActive === "signin" ? "Sign in" : "Register"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <Tabs
            id="controlled-tab-example"
            activeKey={isActive}
            onSelect={(k) => handleTabSelect(k)}
            className="mb-3"
          >
            <Tab eventKey="signin" title="Sign in">
              <Login isActive={isActive === "signin"}></Login>
            </Tab>
            <Tab eventKey="register" title="Register">
              <Register isActive={isActive === "register"}></Register>
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AuthModal;
