const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json())


const users = [
    {id :1, name: 'Sabana', email: 'sabana@gmail.com', job: 'Actress'},
    {id :2, name: 'Sabanz', email: 'sabanaz@gmail.com',job: 'Actress'},
    {id :3, name: 'Sabnur', email: 'sabnur@gmail.com', job: 'Actress'}
]

app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched )
    }
    else{
        res.send(users)
    }
   
})

app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user= users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length +1;
    users.push(user);
    res.send(user)
})

app.get('/', (req, res) => {
    res.send('Running my node CRUD server')
})

app.listen(port, () => {
    console.log('CRUD server is running', port)
})