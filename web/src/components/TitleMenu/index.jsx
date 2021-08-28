import React from "react";
import MaterialIcon from "material-icons-react";
import "./style.css";
import NoteForm from "../NoteForm";

import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

function TitleMenu() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const createNote = () => {
    console.log("aqui")
    //Post
    //Exibe erro
    //fechar e reload
  }

  return (
    <div className="title-menu">
      <img src="" alt="logo"></img>
      <div className="search-input">
        <input type="text"></input>
        <button>
          <MaterialIcon icon="search" size={15} />
        </button>
      </div>
      <div className="actions-menu">
        <button onClick={openModal}>Cadastrar</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <NoteForm
              sucesso={() => createNote()}
            ></NoteForm>
        </Modal>
      </div>
    </div>
  );
}

export default TitleMenu;
