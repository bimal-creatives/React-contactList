import React,{useState, useEffect} from 'react'
import Header from './header/header'
import AddContact from './contact/contact'
import ContactList from './conatactlist/contactList'


function App(){
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts ] = useState([])

    const addContactHandler = (contact) => {
        console.log(contact);
        setContacts([...contacts, contact]);
    };

    useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        setContacts(retriveContacts);
      }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts] );

    return(
        <>
        <div className='ui container'>
        <Header/>
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} />

        </div>
        
        

        </>
    );
};

export default App;