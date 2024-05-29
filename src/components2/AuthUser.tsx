import React, { useState } from "react";

interface IState {
    isLogin: boolean
}

const AuthUser: React.FC = () => {
    const [state, setState] = useState<IState>({ isLogin: false });

    const handleLogin = (): void => {
        setState({ isLogin: true });
    };

    const handleLogOut = (): void => {
        setState({ isLogin: false });
    };

    return (
        <>
            <div className="container">
                <div className="row card p-4 mt-3">
                    <div className="col-md-6">
                        {state.isLogin && state.isLogin ? (<h1>Welcome User</h1>) : (<h1>Please Login for Dashboard</h1>)};
                        {state.isLogin && state.isLogin ? (<button className="btn btn-danger m-2" onClickCapture={handleLogOut}>LogOut</button>) : (<button className="btn btn-primary m-2" onClickCapture={handleLogin} >Login</button>)}
                    </div>
                </div>
            </div>
        </>
    )
};

export default AuthUser;