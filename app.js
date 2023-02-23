const express = require('express');

const app = express();
const PORT = 4000;

app.get('/', (req, res)=>{
    const path=require('path');
    res.status(200);
    res.send(`<h2>Welcome to my Test App<h2>`);
});
app.use(express.json());
app.post('/', (req, res)=>{
    const path=require('path');
    console.log("Req.Headers ",req.headers);
    console.log("Req.Body ",req.body);
    console.log("Req.params ",req.params);

    res.status(200);
    res.send(`<h2>${JSON.stringify(req.headers)}<h2>`);
});

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
