import express from 'express';
import fetchdata from '../middleware/fetchdata.js';
import Notes from '../models/Notes.js';
const router = express.Router();

//Ftech Notes

router.get("/fetchnotes", async (req, res) => {

    try {

        const notes = await Notes.find({});
        res.json(notes);


    } catch (error) {

        res.status(500).json({ error: "Internal Server Error" });

    }

})

//Get All Notes

router.get("/fetchallnotes", fetchdata, async (req, res) => {

    try {

        const notes = await Notes.find({ user: req.userId });
        res.json(notes);


    } catch (error) {

        res.status(500).json({ error: "Internal Server Error" });

    }

})

//Create Note

router.post("/addnote", fetchdata, async (req, res) => {

    const { title, image, description, tag } = req.body;

    try {

        if (!title || !image || !description || !tag) {

            res.status(400).json({ error: "Fields Can't be Empty" })

        }

        const note = await Notes({
            title,
            image,
            description,
            tag,
            user: req.userId
        });

        const savednote = await note.save();

        res.status(200).json({ savednote, success: "Successfully Created Note" });


    } catch (error) {

        res.status(500).json({ error: "Internal Server Error" });

    }

})

//Update Note

router.put('/updatenote/:id', fetchdata, async (req, res) => {

    const { title, description, image, tag } = req.body;
    const { id } = req.params;

    try {

        const note = await Notes.findById({ _id: id });

        if (!note) {
            return res.status(404).send("Not Found")
        }

        //* Note Update 
        const notes = await Notes.findByIdAndUpdate({ _id: id }, {
            $set: {
                title,
                description,
                image,
                tag
            }
        }, { new: true })

        res.json({ notes, success: "Notes Updated Successfully" })

    } catch (error) {
     
        res.status(500).send("Internal Server Error");

    }
})

//Delete Note

router.delete("/deletenote/:id", fetchdata, async (req, res) => {

    const { title, image, description, tag } = req.body;
    const { id } = req.params;

    try {

        const note = await Notes.findById({ _id: id });

        if (!note) {

            res.status(400).json({ error: "Notes Not Found" });

        }

        const notes = await Notes.findByIdAndDelete({ _id: id });

        res.status(200).json({ success: "Successfully Deleted Note" })

    } catch (error) {

        res.status(500).json({ error: "Internal Server Error" });

    }

})

//Get Notes By ID

router.get("/notes/:id", fetchdata, async (req, res) => {

    const { id } = req.params;

    try {

        const note = await Notes.findById({ _id: id });

        if (!note) {

            res.status(400).json({ error: "Note Not Found" });

        } else {

            res.status(200).json(note);

        }

    } catch (error) {

        res.status(500).json({ error: 'Enter Server Error' });

    }

})

export default router;