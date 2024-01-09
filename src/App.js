import './App.css';
import SideBar from './components/sideBar/sidebar';
import Slate from './components/slate';
function App() {
  return (
    <div className='flex h-screen'>
      <SideBar/>
      <Slate/>
    </div>
  );
}

export default App; 