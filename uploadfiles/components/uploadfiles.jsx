import React, { useState } from 'react';

const UploadFiles = () => {
    const [image, setImage] = useState('');
    const [file1, setFile1] = useState('');
    const [file2, setFile2] = useState('');

    const handleFileChange = (event, setFile) => {
        const selectedFile = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            setFile(e.target.result);
        };

        reader.readAsDataURL(selectedFile);
    };

    const handleUpload = async () => {
        const response = await fetch('/api/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ image, file1, file2 }),
        });

        if (response.ok) {
            console.log('Files uploaded successfully');
        } else {
            console.error('An error occurred while uploading files');
        }
    };

    return (
        <div className="container border border-primary rounded-2 p-2">
            <h1>Upload Files</h1>
            <div>
                <input type="file" accept=".png" onChange={(e) => handleFileChange(e, setImage)} />
                <input type="file" accept=".txt" onChange={(e) => handleFileChange(e, setFile1)} />
                <input type="file" accept=".txt" onChange={(e) => handleFileChange(e, setFile2)} />
            </div>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default UploadFiles;
