import {useState} from 'react';

export default function ColorSwitcher() {
    const [selectColor, setSelectColor] = useState('red');
    
    const handleSelectColor = (e) =>{
        setSelectColor(e.target.value);
    }

    return (
        <div>
            <select value={selectColor} onChange={handleSelectColor}>
                <option value="" disabled hidden>Select a color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
            </select>

            <div style={{background: selectColor, padding: '40px', marginRight: '30px'}}></div>
        </div>
    )
}