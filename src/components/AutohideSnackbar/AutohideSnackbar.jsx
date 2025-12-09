import { Toast, ToastContainer } from "react-bootstrap";
export default function AutohideSnackbar({ open, setOpen, message }) {
  const handleClose = () => setOpen(false);

  return (
    <ToastContainer position="bottom-center" className="p-3">
      <Toast
        key={message}   
        bg="success"
        show={open}
        onClose={handleClose}
        delay={4000}
        autohide
      >
        <Toast.Body className="text-white fw-bold">
          {message}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
