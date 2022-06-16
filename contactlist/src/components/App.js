import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './header/header';
import Contact from "./contact/contact";
import ContactList from "./conatactlist/contactList"

function App() {

  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);

  const addContact = (contact) =>{
    console.log(contact)
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts){
      setContacts(retriveContacts);
    } 
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);



  return (
    <div className='ui container' > 
    
    <Header/>
    <Contact addContact={addContact} />
    <ContactList contacts = {contacts} />
    </div>
  );
}

export default App;
