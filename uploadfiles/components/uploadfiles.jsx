import React, { useState } from 'react';

const UploadFiles = () => {
    const [files, setFiles] = useState({
        image: null,
        textFile1: null,
        textFile2: null,
    });

    const handleFileChange = (event, fileType) => {
        const selectedFile = event.target.files[0];
        setFiles((prevFiles) => ({
            ...prevFiles,
            [fileType]: selectedFile,
        }));
    };

    const handleUpload = () => {
        // You can implement the file upload logic here
        // For simplicity, this example just logs the selected files
        console.log('Selected Files:', files);
    };

    return (
        <div className="container border border-primary rounded-2 p-2">
            <h1>Upload Files</h1>
            <div>
                <input type="file" accept=".png" onChange={(e) => handleFileChange(e, 'image')} />
                <input type="file" accept=".txt" onChange={(e) => handleFileChange(e, 'textFile1')} />
                <input type="file" accept=".txt" onChange={(e) => handleFileChange(e, 'textFile2')} />
            </div>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default UploadFiles;
