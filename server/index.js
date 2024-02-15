const express = require("express");
const cors = require('cors');
const nano = require('nano')('http://admin:admin@localhost:5984');
const bp = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'PUT',
    'POST',
  ],

  allowedHeaders: [
    "Origin", "X-Requested-With", "Content-Type", "Accept"
  ],
};

app.use(cors(corsOpts));
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
        // console.log(doc);
        const result = await notesDB.insert(doc);
        res.json(result);
    } catch (error) {
        console.log(error);
    }
})

app.post("/api/delete", async(req,res)=>{
    try {
        const id = req.body.id;
        const rev = req.body.rev;
        // console.log(req.body)
        const result = notesDB.destroy(id, rev);
        res.json(result);
    } catch (error) {
        console.log(`error`);
    }
})

app.post("/api/edit", async (req,res)=>{
    try {
        const id = req.body.id;
        const rev = req.body.rev;
        const title = req.body.title;
        const content = req.body.content;
        const doc = {
            title: title,
            content: content
        }
        response2 = await notesDB.insert({_id:id, _rev:rev, ...doc});
        // console.log(JSON.parse(response2));
        res.send('success');
    } catch (error) {
        res.send(error);
    }
})

app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`);
})
