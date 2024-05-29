import React, { useState } from "react";

interface IState {
    user: {
        email: string;
        password: string;
    };
}

const Login: React.FC = () => {
    const [state, setState] = useState<IState>({
        user: {
            email: "",
            password: ""
        }
    });

    const [submitted, setSubmitted] = useState<boolean>(false); // State to track form submission

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setState({
            user: {
                ...state.user,
                [event.target.name]: event.target.value
            }
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setSubmitted(true); // Set submitted to true when form is submitted
        console.log(state.user);
    };

    return (
        <>
            <div className="container mt-5">
                <div className="w-50">
                    <form className="card p-4 border-dark" onSubmit={handleSubmit}>
                        <h1>Login Form Example</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" name="email" onChange={handleChange} value={state.user.email} className="form-control border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name="password" onChange={handleChange} value={state.user.password} className="form-control border-dark" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    {submitted && ( // Show input data only if form has been submitted
                        <div className="mt-4 bg-light p-2 card border-dark">
                            <h1>Input Data</h1>
                            <h3>{JSON.stringify(state.user)}</h3>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Login;
