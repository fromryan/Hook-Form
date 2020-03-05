import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './FormWrapperStyle.css'



const RegisterForm = props => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(formState);
    }
    return(
        <div>
            <Form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <h1 className="display-4">Register</h1>
                    <label>First Name</label>
                    <input size="sm" className="mb-3" type="text" name="firstName" onChange={onChangeHandler}/>
                    <br/>        
                    <label>Last Name</label>
                    <input size="sm" className="mb-3" type="text" name="lastName" onChange={onChangeHandler}/>
                    <br/>        
                    <label>Email</label>
                    <input size="sm" className="mb-3" type="email" name="email" onChange={onChangeHandler}/>
                    <br/>        
                    <label>Password</label>
                    <input size="sm" className="mb-3" type="password" name="password" onChange={onChangeHandler}/>
                    <br/>        
                    <label>Confirm Password</label>
                    <input size="sm" className="mb-3" type="password" name="confirmPassword" onChange={onChangeHandler}/>
                    <br/>   
                    <Button variant="primary" type="submit">Submit</Button>   
                </div>  
            </Form>

            <div className="yourData">
                <p>Your Form Data</p>
                <p>{formState.firstName}</p>
                <p>Last Name: {formState.lastName}</p>
                <p>Email: {formState.email}</p>
                <p>Password: {formState.password}</p>
                <p>Confirm Password: {formState.confirmPassword}</p>
            </div>
        </div>
    );
}


export default RegisterForm;