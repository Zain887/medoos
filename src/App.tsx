import './App.css';
import Menubar from './component/Menubar';
import { menuItems } from './data';

function App() {
  return (
  <Menubar logoAlt='Medoos' logoSrc='/medoosLogo.svg' menuItems={menuItems}/>
  );
}

export default App;