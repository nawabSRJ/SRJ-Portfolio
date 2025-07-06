import express from 'express'
import cors from 'cors'
import sendEmail from './services/mailer.js';

const app = express();
app.use(express.json());
app.use(cors({
    origin:['https://srj-tech.vercel.app'],
    methods:['GET','POST'],
    credentials: true
}));

app.post('/api/send-email', async (req,res) => {
    const {email, message} = req.body;
    const result = await sendEmail(email,message);
    if(result.success){
        res.status(200).json({ message: 'Email sent successfully' });
    }   
    else{
        res.status(500).json({ error: 'Failed to send email' });
    } 
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
