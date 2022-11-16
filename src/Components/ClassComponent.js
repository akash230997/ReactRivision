import React from 'react';

export default class ClassComponent extends React.Component{
    constructor(){
        super()
        this.state={
            data : 1
        }
    }
    update(){
        if (this.state.data < 10){
            this.setState({ data: this.state.data + 1 })
        }else{
            console.log("Limit Exceeeed.......")
        }
    }
    down(){
        if (this.state.data > 0){
            this.setState({data : this.state.data -1});
        }else{
            console.log('Already Data is' + this.state.data);
        }
    }


    render(){
        return(
            <>
            <h1>Class Components :</h1>
            {this.state.data}<br/>
            <button onClick={()=>this.update()}>Update</button>
            <button onClick={()=>this.down()}>Down</button>
            <button onClick={()=>this.setState({data:0})}>Reset</button>
            </>
        )
    }
}