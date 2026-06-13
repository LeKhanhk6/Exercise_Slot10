const Button = ({onClick}) => {
    return (
        <button onClick={onClick} style={{padding: '5px 10px', background: 'white', borderRadius: '3px'}}>Increment</button>
    )
}

export default Button