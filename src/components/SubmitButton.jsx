// Code SubmitButton Component Here

function SubmitButton (){
    const handleMouseEnter = () => {
        console.log("Mouse Entering");
    };

    const handleMouseLeave = () => {
        console.log("Mouse Exiting");
    };

    return(
        <button
            type="submit"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            Submit Password
        </button>
    )
}

export default SubmitButton;