import { createPortal } from 'react-dom';

function ModalPortal({ children }) {
  return createPortal(<>{children}</>, document.getElementById('modal-root'));
}

export default ModalPortal;
