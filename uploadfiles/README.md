# File Uploader

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

```bash
npx create-next-app uploadfiles
```

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const azure = require('@azure/storage-blob');
const app = express();
app.use(bodyParser.json());

const blobServiceClient = azure.BlobServiceClient.fromConnectionString(
  process.env.AZURE_STORAGE_CONNECTION_STRING
);

app.post('/upload', async (req, res) => {
  try {
    const containerClient = blobServiceClient.getContainerClient(req.user.sub); // Use user's unique ID as the container name
    await containerClient.createIfNotExists();
    
    // Upload files to the container
    await Promise.all([
      uploadFile(containerClient, 'image.jpg', req.body.image),
      uploadFile(containerClient, 'file1.txt', req.body.file1),
      uploadFile(containerClient, 'file2.txt', req.body.file2),
    ]);

    res.status(200).send('Files uploaded successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while uploading files');
  }
});

async function uploadFile(containerClient, fileName, base64Content) {
  const blockBlobClient = containerClient.getBlockBlobClient(fileName);
  const content = Buffer.from(base64Content, 'base64');
  await blockBlobClient.upload(content, content.length);
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
