import React from "react";
import { useEffect } from "react";
import NoteCard from "../NoteCard";
import './style.css';
const axios = require('axios');
const api = axios.create({
    baseURL: 'http://localhost:3333',
    timeout: 1000,
  });

function NoteList(){

    const [notes, setNotes] = React.useState([]);

    const onLoad = () => {
        api.get('/notes')
            .then((response) => {
                console.log(response.data)
                setNotes(response.data)
            })
            .catch(() => {
                console.log('error')
            })
    }

    useEffect(onLoad,[])        

    return (
        <div className='notes-list'>
            {notes.map((note) => 
                <NoteCard 
                    title={note.title} 
                    body={note.description}
                />

            )}
        </div>
    );
}

export default NoteList;