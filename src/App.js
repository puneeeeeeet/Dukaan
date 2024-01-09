import './App.css';
import SideBar from './components/sideBar/sidebar';
import Slate from './components/slate';
import Navbar from './components/navbar';
function App() {
  return (
    <div className='flex h-screen overflow-hidden '>
      <SideBar/>
      <Slate/>
    </div>
  );
}

export default App; 