import Input from "../UI/Input";
import Button from "../UI/Button";
import {useState} from "react";

const Userbox = () => {
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredUsername, setEnteredUsername] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if (enteredAge.match(/^[1-9.]+$/) === null) {
            console.log("Should be a number and not less than zero");
        }
        // console.log(enteredAge);
        // console.log(enteredUsername);
    };

    const handleInputAge = (event) => {
        event.preventDefault();
        setEnteredAge(event.target.value);
        // console.log(event.target.value);
    };

    const handleInputUsername = (event) => {
        event.preventDefault();
        setEnteredUsername(event.target.value);
        // console.log(event.target.value);
    };

    return (<form onSubmit={handleSubmit}>
        <Input
            type="text"
            placeholder="Username"
            Event={{onChange: handleInputUsername}}
        />
        <Input
            type="text"
            placeholder="Age (Years)"
            Event={{onChange: handleInputAge}}
        />
        <Button type="submit"> Add User </Button>
    </form>);
};

export default Userbox;