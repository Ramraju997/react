import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import contacts from './components/contacts';
import Avatar from './components/avatar';



function createCard(contact) {
  return <Card 
    key = {contact.id}
    id ={contact.id}
    name = {contact.name}
    img = {contact.imgURL}
    phone = {contact.phone}
    email ={contact.email}
  />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
      {contacts.map(createCard)}
    </div>
   
  );
}

export default App;
