import React from "react";
import user from "../images/149071.png"

const contactCard = (props) => {

    const {id, name , email} = props.contact;

    return(
        <div className="item">
            <img className="ui avatar image"  src={user} alt="user" />
            <div className="content" >
                <div>{id}</div>
                <div className="header">{name}</div>
                <div >{email}</div>
            </div>
            <i className="trash alternate outline icon"
            style = {{color: "red", marginTop: "7px"}}></i>
        </div>
    );
};

export default contactCard;