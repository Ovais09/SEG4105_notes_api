import express from 'express';
import { db } from './firebaseconfig.js';
import { collection, query, doc, getDocs, setDoc, deleteDoc } from 'firebase/firestore'; 
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())



app.get(`/:userId/allNotes`, async (req, res) => {
    // app.get(`/{${userId}/allNotes}`, (req, res) => {
    console.log(req.params.userId)
    const notes = []
    const q = query(collection(db, 'Notes'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
        const docRef = doc(collection(db, 'Notes'))

        if (document.data().uid == req.params.userId) {
            notes.push({
                id: docRef.id,
                description: document.data().description,
                title: document.data().title,
                uid: document.data().uid
            })
        }

    });
    // console.log(notes)
    res.json({ documents: notes })
})

app.post('/:userId/addNote', async (req, res) => {
    console.log(req.body)
    const docRef = doc(collection(db, 'Notes'))
    await setDoc(doc(db, 'Notes', docRef.id), {
        noteId: docRef.id,
        title: req.body.title,
        description: req.body.description,
        uid: req.params.userId
    })
    res.json({ message: 'Note added' })
})

app.delete('/:userId/deleteNote/:noteId', async (req, res) => {
    console.log(req.params.userId)
    console.log(req.params.noteId)

    await deleteDoc(doc(db, "Notes", req.params.noteId));
    res.json({ "message": "Note deleted" })
})

app.put('/:userId/updateNote/:noteId', async (req, res) => {
    console.log(req.params.userId)
    console.log(req.params.noteId)

    await setDoc(doc(db, "Notes", req.params.noteId), {
        title: req.body.title,
        description: req.body.description,
        uid: req.params.userId
    })
    res.json({message: "Note updated"})
})

app.listen(process.env.PORT || 8080, () => {
    console.log('Server started')
})