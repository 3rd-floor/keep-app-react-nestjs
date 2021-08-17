import NoteList from '../components/NoteList/index.jsx';
import TitleMenu from '../components/TitleMenu/index.jsx'

function Layout() {
  return (
    <>
      <div className='div-header'>
        <TitleMenu></TitleMenu>
      </div>
      <div className='div-body'>
        <NoteList></NoteList>
      </div>
    </>
  );
}
  
export default Layout;
  