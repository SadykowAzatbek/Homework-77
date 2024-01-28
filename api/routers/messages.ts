import {Router} from 'express';
import {MessageWithoutId} from "../types";
import fileDb from "../fileDb";
import {imageUpload} from "../multer";
const messagesRouter = Router();

messagesRouter.get('/', async (req, res) => {
    const messages = await fileDb.getItems();
    res.send(messages);
});

messagesRouter.post('/',imageUpload.single('image'), async (req, res) => {
    const message: MessageWithoutId = {
        author: req.body.author,
        message: req.body.message,
        image: req.file ? req.file.filename : null,
    };

    if (!message.message) {
        return res.status(422).send({error: 'Enter your message!'});
    }

    const addNewMessage = await fileDb.addItem(message);
    res.send(addNewMessage);
});

export default messagesRouter;