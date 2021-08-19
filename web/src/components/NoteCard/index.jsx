import MaterialIcon from 'material-icons-react';
import './style.css';

function NoteCard(props){
    return (
        <div className='card-note'>
            <div className='card-note-head'>
                <h1>{props.title}</h1>
            </div>
            <div className='card-note-body'>
                <p className='card-note-text'>{props.body}</p>
            </div>
            <div className='card-note-botton'>
                <div className='card-note-tags'>
                    <p>Tags</p>
                </div>
                <div className='card-note-actions'>
                    <button>
                        <MaterialIcon icon='edit' size={20}/>
                    </button>
                    <button>
                        <MaterialIcon icon='delete' size={20}/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NoteCard;