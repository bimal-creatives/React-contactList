import React from "react";

class Addcontact extends React.Component{

    state = {
        name : "",
        email : "",
    };

    add = (e) => {
        e.preventDefault();
    if (this.state.name === "" && this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
         console.log(this.state);
    } 

    render(){
        return(
            <div className="ui main">
                <h2>Add contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Enter your name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>email</label>
                        <input type="text" name="email" placeholder="Enter your email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    
                    <button className="ui button blue" onSubmit={this.add} >Add</button>
                </form>
            </div>
        )
    }
};

export default Addcontact;