// src/pages/PhotoAlbum.tsx
import React, { useState, useEffect } from 'react';
import { Stack, Image, Text } from '@fluentui/react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebaseConfig';

const PhotoAlbum: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesRef = ref(storage, 'hair-designs/');
        const imageList = await listAll(imagesRef);
        const urls = await Promise.all(imageList.items.map(item => getDownloadURL(item)));
        setImages(urls);
      } catch (err) {
        setError('Failed to load images. Please try again later.');
        console.error('Error fetching images:', err);
      }
    };

    fetchImages();
  }, []);

  return (
    <Stack tokens={{ childrenGap: 10 }} padding={20}>
      <Text variant="xLarge">Hair Design Gallery</Text>
      {error ? (
        <Text variant="large" style={{ color: 'red' }}>{error}</Text>
      ) : (
        <Stack horizontal wrap tokens={{ childrenGap: 15 }}>
          {images.map((url, index) => (
            <Image key={index} src={url} alt={`Hair Design ${index + 1}`} width={200} height={200} />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default PhotoAlbum;
