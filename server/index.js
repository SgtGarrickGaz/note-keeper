const express = require("express");
const cors = require('cors');
const nano = require('nano')('http://admin:admin@localhost:5984');
const bp = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bp.json());

const notesDB = nano.use('notes');
const doc = {
    title: 'title',
    content: 'content'
}

app.get("/api/check", (req,res)=> {
    notesDB.insert(doc, (err, body)=>
    {
        if(err) return err;
        else return body;
    })
})

app.get("/api/notes", (req, res)=> {
    notesDB.list({include_docs: true}, (err,body)=>{
        if(err) console.log(err);
        else res.json(body.rows);
    })
})

app.post("/api/save", async (req,res)=>{
    try {
        const doc = req.body;
        console.log(doc);
        const result = await notesDB.insert(doc);
        console.log(result)
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`);
})
