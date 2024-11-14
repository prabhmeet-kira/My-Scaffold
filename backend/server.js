import express from 'express';
import cors from 'cors';
import pool from './db';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// creation of new items 
app.post('/api/items' , async (req, res) =>{
    const { name, description } = req.body;
    try{
        const result  = await pool.query('INSERT INTO items (name, description) VALUES ($1, $2)', [name, description]);
        res.json(result.rows[0]);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Error creating item');
    }
});


// read all the items
app.get('/api/items' , async (req, res)=> {
    try{
        const result = await pool.query('SELECT * FROM items');
        res.json(result.rows);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Error fetching items');
    }
});


// update an entry
app.put('/api/items/:id' , async (req, res) => {
    const {id} = req.params;
    const {name, description} = req.body;
    try{
        const result = await pool.query('UPDATE items SET name = $1 , description = $2 WHERE id  = $3' , [name, description , id]);
        res.json(result.rows[0]);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Failed to update an entry');
    }
});

// Deleting an item
app.delete('/api/items/:id', async ( req, res) => {
    const {id} = req.params;
    try{
        const result = await pool.query('DELETE FROM items WHERE id = $1', [id]);
        res.send('ITEM IS DELETED ');
    }
    catch(error){
        console.log(error);
        res.status(500).send('failed to delete an item');
    }
});

app.listen(PORT , ()=> {
    console.log(`server is runninng at ${PORT}`);
});