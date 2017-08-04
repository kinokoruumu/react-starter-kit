import React from "react";

export default class MyInput extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
        <input value={this.props.value}  onChange={this.props.onChange} />
        )
    }

}