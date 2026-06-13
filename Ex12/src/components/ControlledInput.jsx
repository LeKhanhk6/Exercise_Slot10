import {useState} from 'react';
export default function ControlledInput() {
    const [text, setText] = useState('');

    const handleText = (event) =>{
        setText(event.target.value);
    }
    return (
        <div>
            <input type='text' value={text} onChange={handleText}/>
            <p>Input: {text}</p>
        </div>
    );
}