import { useState } from 'react';
import Modal from './Modal';

function ModalTest() {
  const [isModal, setIsModal] = useState(true);

  return <div>{isModal && <Modal onClose={() => setIsModal(false)} />}</div>;
}

export default ModalTest;
