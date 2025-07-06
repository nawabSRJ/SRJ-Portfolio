import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config();

const sendEmail = async (email,message) => {
    try {
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user: process.env.MY_EMAIL,
                pass: process.env.MY_EMAIL_PASS,
            }
        });

        const mailOptions = {
            from:email,
            to: process.env.RECEIVER_EMAIL, 
            subject:`New message from portfolio site`,
            text:`From ${email}\n\n${message}`,
        };

        await transporter.sendMail(mailOptions);
        return {success:true};
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error };
    }
    
}

export default sendEmail;