import React from "react";

// function Greet(){
//     return(
//         <h1>Welocome to React Developer Section.</h1>
//     )
// }

class Car extends React.Component {
    constructor(){
        super();
        this.state = {color: "red"};
    }
    changeColor = () => {
        this.setState({color:"Blue"});
    }
    render() {
        return (
            <div style={{backgroundColor:"#282c34",color:"white"}}>
                <h2>I am a {this.state.color} Car!</h2>
                <button
                    type="button"
                    onClick={this.changeColor}
                    >Change color</button>
                
            </div>
        );
    }

  }

export default Car;
