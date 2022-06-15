import React from "react";
import Card from "../contactcard/contactCard";

const ContactList = (props) =>{
    console.log(props);

const contactlist = props.contacts.map ((contact) => {
    return (
        <Card contact={contact} />
    );
})

   

    return(
        <div className="ui celled list" >
            {contactlist}
        </div>
    );
}


export default ContactList