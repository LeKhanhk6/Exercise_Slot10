import {useState} from 'react';
import Button from './components/Button';
import ControlledInput from './components/ControlledInput';
import ToggleVisibility from './components/ToggleVisibility';
import ToDoList from './components/ToDoList';
import ColorSwitcher from './components/ColorSwitcher';
import Search from './components/Search';
import DrapAndDropList from './components/DragAndDropList';
function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () =>{
    setCount(count+1);
  };
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px'}}>
        <div>
          <Button onClick={handleIncrement}></Button>
          <h2>Count: {count}</h2>
        </div>
        
        <ControlledInput/>
        <ToggleVisibility/>
        <ToDoList/>
        <ColorSwitcher/>
        <Search/>
        <DrapAndDropList/>
    </div>
  );
}

export default App;