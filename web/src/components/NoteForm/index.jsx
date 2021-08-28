import React from 'react';
import MaterialIcon from 'material-icons-react';
import './style.css'

function NoteForm(props){
    return (
        <div className="modal-container">
            <label htmlFor="title">Título</label>
            <input id='title' type="text" autoComplete="off"/>

            <label htmlFor="body">Nota</label>
            <textarea name="" id="body" cols="30" rows="10"></textarea>
            
            <label htmlFor="tags">Tags</label>
            <input type="text" id="tags" autoComplete="off" />
            
            <div className="modal-container-btns">
                <button type="button" onClick={props.sucesso}>
                    <MaterialIcon icon='cancel' size={20}/>
                </button>
                <button type="button" onClick={props.sucesso}>
                    <MaterialIcon icon='save' size={20}/>
                </button>
            </div>
        </div>
    );
}

export default NoteForm;