import {useState} from 'react';

export default function ToggleVisibility(){
    const [isVisible, setIsVisible] = useState(false);

    const handleToggle= () =>{
        setIsVisible(!isVisible);
    }
    return (
        <div style={{textAlign: 'center'}}>
            <button onClick={handleToggle} style={{background: 'white'}}>
                {isVisible ? 'Hide' : 'Show'}
            </button>

            {isVisible && <h1>Toggle me!</h1>}
        </div>
    )
}