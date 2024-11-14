import React, { useState , useEffect } from 'react'
import axios from 'axios';

const CrudOPS = () => {

  const [items, setItems ] = useState([]);
  const [name, setName] = useState('');
  const [description , setDescription] = useState('');
  const [editID, setEditID] = useState(null);

  // fetching all the items on component mount
  useEffect(()=>{
    axios.get('http://localhost:5000/api/items').then(response => {
      setItems(response.data);
    }).catch(error => {
      console.log('Error fetching the items ' , error);
    });
  }, []);

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(editID){
      axios.put(`http://localhost:5000/api/items/${editID}`, {name, description}).then(response =>{
        setItems(item.map(itemEntry => itemEntry.id === editID ? response.data : itemEntry));
        setName('');
        setDescription('');
        setEditID(null);
      }).catch(error => { 
        console.log('error happened', error);
      })
    }
    else{
      axios.post('http://localhost:5000/api/items', {name, description}).then(response =>{
        setItems([...items, response.data]);
        setName('');
        setDescription('');
      })
      .catch(error => {
        console.log('error happened' , error);
      })
    }
  };















  return (
    <div>
      <h1>Component for performing CRUD operations</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='enter the name' required/>
        <input type='text' value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder='enter the description' required />
        <button type="submit">{editID ? 'Update' : 'Create'} an Item</button>
      </form>
    </div>
  )
}

export default CrudOPS