import './App.css';
import Menubar from './component/Menubar';
import { menuItems } from './data';

function App() {
  return (
    <Menubar menuItems={menuItems} logoAltDesktop='Medoos' logoAltMobile='Medoos' logoSrcDesktop='/medoosLogo.svg' logoSrcMobile='/medoosLogo.svg' />
  );
}

export default App;