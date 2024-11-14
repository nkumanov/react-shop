import React, { useState } from "react";
import { Modal, Tab, Tabs } from "react-bootstrap";

type AuthModalProps = {
  show: boolean;
  handleClose: () => void;
};

function AuthModal({ show, handleClose }: AuthModalProps) {
  const [key, setKey] = useState("signin");
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="signin" title="Sign in">
              Tab content for Home
            </Tab>
            <Tab eventKey="register" title="Register">
              Tab content for Profile
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AuthModal;
