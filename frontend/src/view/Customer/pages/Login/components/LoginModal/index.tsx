import Modal from 'react-bootstrap/Modal';
import LoginForm from "../LoginForm";

const LoginModal = ({
  show = true,
  handleClose = () => { }
}) => {

  return (
    <Modal
      show={show}
      onHide={handleClose}
      dialogClassName="modal-90w modal-90h"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ border: 'none' }}></Modal.Header>
      <Modal.Body>
        <LoginForm />
      </Modal.Body>
    </Modal>
  )
}

export default LoginModal;