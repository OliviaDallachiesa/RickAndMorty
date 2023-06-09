import { useState } from "react";
import validation from "../Validation/Validation";


const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name] : event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{color: "white"}}>Email:</label>
            <input type="text" name="email" value={userData.email} 
            onChange={handleChange}/>
            {errors.email && <p style={{color:"white"}}>{errors.email}</p>}

            <label htmlFor="password" style={{color: "white"}}>Password:</label>
            <input type="text" name="password" value={userData.password} 
            onChange={handleChange}/>
            {errors.password && <p style={{color:"white"}}>{errors.password}</p>}
            

            <button>Submit</button>
        </form>
    )
}

export default Form;