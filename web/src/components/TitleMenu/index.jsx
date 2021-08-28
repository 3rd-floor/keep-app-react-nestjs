import React from "react";
import MaterialIcon from "material-icons-react";
import "./style.css";

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
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function createNote() {
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
            <div className="modal-container">
                <label htmlFor="title">Título</label>
                <input id='title' type="text" autoComplete="off"/>

                <label htmlFor="body">Nota</label>
                <textarea name="" id="body" cols="30" rows="10"></textarea>
                
                <label htmlFor="tags">Tags</label>
                <input type="text" id="tags" autoComplete="off" />
                
                <div className="modal-container-btns">
                    <button type="button" onClick={createNote}>
                        <MaterialIcon icon='cancel' size={20}/>
                    </button>
                    <button type="button" onClick={createNote}>
                        <MaterialIcon icon='save' size={20}/>
                    </button>
                </div>
            </div>
        </Modal>
      </div>
    </div>
  );
}

export default TitleMenu;
