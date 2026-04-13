import React, { useState } from 'react'
import Home from './pages/Home';
import Modal from './components/Modal';


const App = () => {

  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setModalOpen(false);
    document.body.style.overflow = "";
  }

  return (
    <div>
      <button className="rsvp__float" onClick={openModal}>RSVP</button>
      <Home openModal={openModal} />
      <Modal openModal={modalOpen} closeModal={closeModal} />
    </div>
  )
}

export default App
