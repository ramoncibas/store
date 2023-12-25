import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Bem vindo!</h4>
        <p>
          Será necessário efetuar o <a href="/login">Login</a>, para que você tenha uma melhor experiência em nossa plataforma!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button href="/login">Sim, eu quero 💙</Button>
        <Button variant="danger" onClick={props.onHide}>Não, obrigado(a) 😉</Button>
      </Modal.Footer>
    </Modal>
  );
}

const ModalToLogin = ({state}) => {
  const [modalShow, setModalShow] = useState(state);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ModalToLogin;