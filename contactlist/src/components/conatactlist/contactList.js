import React from 'react';
import ContactCard from "../contactcard/contactCard"

const Conatactlist = (props) =>{
   
    const deleteContactHandler = (id) => {
        props.getContact(id);
    };

   const renderContactList = props.contacts.map((contact) => {
    
    return <ContactCard contact={contact} 
    clickHandler={deleteContactHandler}
    key={contact.id} />
   } );

   

    return(
        <div className='ui celled list'>
            <h2>Contacts</h2>
            {renderContactList}
        </div>
    );
};

export default Conatactlist;