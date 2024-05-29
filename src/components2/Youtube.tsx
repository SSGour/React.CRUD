//Function with parameter

import React, { useState } from "react";

interface IState {
    massage: string
}

const Youtube: React.FC = () => {
    const [state, setState] = useState<IState>({ massage: "Welcome" })
    const handleGreet = (greet: string): void => {
        setState({ massage: greet });
    }
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="card mt-4">
                        <div className="card-body">
                            <h1 className="ms-3 mb-5" >{state.massage}</h1>
                            {/* onClick function with parameter */}
                            <button className="btn btn-danger ms-3" onChange={() => handleGreet("Like")} >Like</button>
                            <button className="btn btn-success ms-3" onChange={() => handleGreet("Comment")}>Comment</button>
                            <button className="btn btn-info ms-3" onChange={() => handleGreet("Subscribe")}>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Youtube;