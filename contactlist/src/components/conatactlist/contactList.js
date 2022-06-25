import React from 'react';
import ContactCard from "../contactcard/contactCard"

const Conatactlist = (props) =>{
   

   const renderContactList = props.contacts.map((contact) => {
    
    return <ContactCard contact={contact}/>
   } );

   

    return(
        <div className='ui celled list'>
            <h2>Contacts</h2>
            {renderContactList}
        </div>
    );
};

export default Conatactlist;