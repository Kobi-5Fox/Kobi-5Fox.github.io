const express = require('express');

const app = express();
const PORT = 4200;

app.get('/', (req, res)=>{
    const path=require('path');
    res.status(200);
    res.send(`<h2>Welcome to my Test App<h2>`);
});
app.use(express.json());
app.post('/', (req, res)=>{
    res.status(200);
    res.send(`Headers ${JSON.stringify(req.headers)}, \r\n  Body :${JSON.stringify(req.body)}`);
});

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
