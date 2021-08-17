import './style.css';

function NoteCard(props){
    return (
        <div className='card-note'>
            <header className='card-note-head'>
                <h1>{props.title}</h1>
            </header>
            <div className='card-note-body'>
                <p className='card-note-text'>{props.body}</p>
            </div>
            <div className='card-note-botton'>
                <div className='card-note-tags'>
                    <p>Tags</p>
                </div>
                <div className='card-note-actions'>
                    <button>Editar</button>
                    <button>Remover</button>
                </div>
            </div>
        </div>
    );
}

export default NoteCard;