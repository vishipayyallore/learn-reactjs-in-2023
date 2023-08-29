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

    const handleClear = () => {
        setImage(null);
        setFile1(null);
        setFile2(null);

        // Reset file input values
        const fileInputs = document.querySelectorAll('input[type="file"]');
        fileInputs.forEach(input => {
            input.value = '';
        });
    };

    return (
        <div className="container border border-primary rounded-2 p-2 shadow-lg bg-light">
            <h2 className="text-center">Background Image | Knowledge Base | OpenAI System Instructions</h2>
            <div className="mb-3">
                <label htmlFor="imageFile" className="form-label">Background Image (.PNG)</label>
                <input type="file" className="form-control" id="imageFile" accept=".png" onChange={(e) => handleFileChange(e, setImage)} />
            </div>
            <div className="mb-3">
                <label htmlFor="file1" className="form-label">Knowledge Base File (.txt)</label>
                <input type="file" className="form-control" id="file1" accept=".txt" onChange={(e) => handleFileChange(e, setFile1)} />
            </div>
            <div className="mb-3">
                <label htmlFor="file2" className="form-label">OpenAI Instructions File (.txt)</label>
                <input type="file" className="form-control" id="file2" accept=".txt" onChange={(e) => handleFileChange(e, setFile2)} />
            </div>
            <div className="mb-3">
                <button className="btn btn-primary" onClick={handleUpload}>Upload</button>
                <button className="btn btn-danger me-2" onClick={handleClear}>Clear</button>
            </div>
        </div>
    );
};

export default UploadFiles;
