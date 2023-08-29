import fs from 'fs';
import path from 'path';

const UPLOADS_DIR = path.join(process.cwd(), 'uploads');

const uploadToServer = async (req, res) => {
    try {
        const { image, file1, file2 } = req.body;

        // Create the "uploads" directory if it doesn't exist
        if (!fs.existsSync(UPLOADS_DIR)) {
            fs.mkdirSync(UPLOADS_DIR);
        }

        // Save uploaded files to the "uploads" directory
        fs.writeFileSync(path.join(UPLOADS_DIR, 'bg.PNG'), image, 'base64');
        fs.writeFileSync(path.join(UPLOADS_DIR, 'KB.txt'), file1, 'utf-8');
        fs.writeFileSync(path.join(UPLOADS_DIR, 'OpenAIInstructions.txt'), file2, 'utf-8');

        res.status(200).send('Files uploaded successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while uploading files');
    }
};

export default uploadToServer;
