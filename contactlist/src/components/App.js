import React, {useState} from 'react'
import './App.css';
import Header from './header/header';
import Addcontact from "./contact/contact";
import ContactList from "./conatactlist/contactList"

function App() {

  const [contacts, setContacts] = useState([])

  return (
    <div className='ui container' > 
    
    <Header/>
    <Addcontact/>
    <ContactList contacts = {contacts} />
    </div>
  );
}

export default App;
