const express = require('express');

const app = express();
const PORT = 4200;
app.use(express.json());


app.get('/', (req, res)=>{
    const path=require('path');
    res.status(200);
    res.send(`<h2>Welcome to my Test App<h2>`);
});

app.post('/purchased', (req, res)=>{
    res.status(200);
    res.send(`Headers ${JSON.stringify(req.headers)}, \r\n  Body :${JSON.stringify(req.body)}`);
});

app.get('/trial', (req, res)=>{
    res.status(200);
    res.send('Trial Plan is Under Testing');
});

app.get('/security-policy', (req, res)=>{
    res.status(200);
    res.send('We are committed to protect the customers data');
});


app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
