// PhotoCard.tsx

import Image from 'next/image';
import React from 'react';
import { Photo } from './PhotoInterface';

interface PhotoCardProps {
    photo: Photo;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
    return (
        <div className="photo-card">
            <Image src={photo.thumbnailUrl} alt={photo.title} width={100} height={100} />
            <h3>{photo.title}</h3>
        </div>
    );
};

export default PhotoCard;
