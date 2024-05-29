import { title } from "process";
import React, { Component } from "react";

interface IState {
    coName: string,
    title: string
}

interface IProps {
    name: string,
    age: number
};

export default class ClassComp extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            coName: "Sidhant",
            title: "Programmer"
        };
    }

    render() {
        const { name, age } = this.props;
        const { coName, title } = this.state
        return (
            <>
                <h1 className="bg-dark p-1 text-white text-center" >Class Component</h1>
                <div className='border px-4 bg-light mb-4'>
                    <h3>
                        Name: <b>{name}</b><br />
                        Age: <b>{age}</b><br />
                    </h3>
                </div>
                <div className="col-md-4 card p-2">
                    <h1>Value From Class</h1>
                    <h3>Name: {coName}</h3>
                    <h3>Title: {title}</h3>
                </div>
            </>
        );
    };
};