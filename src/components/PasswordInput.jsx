// Code PasswordInput Component Here

function PasswordInput (){
    const handleChange = (event) => {
        console.log("Entering password...");
    };

    return(
            <input
            type="password"
            onChange={handleChange}
            />
    );
}

export default PasswordInput;