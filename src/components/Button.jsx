
function Button({ handleResult }) {
    
    return (
        <button onClick={() => handleResult()} className="btn">
            see result
        </button>
    )
}

export default Button;
