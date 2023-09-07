// PhotoList.tsx

import React from 'react';
import PhotoCard from './PhotoCard';
import { Photo } from './PhotoInterface';

interface PhotoListProps {
    photos: Photo[];
}

const PhotoList: React.FC<PhotoListProps> = ({ photos }) => {
    return (
        <div className="photo-list">
            {photos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
            ))}
        </div>
    );
};

export default PhotoList;
