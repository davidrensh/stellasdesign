// src/pages/PhotoAlbum.tsx
import React, { useState, useEffect } from 'react';
import { Stack, Image, Text } from '@fluentui/react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebaseConfig';

const PhotoAlbum: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  return (
    <div
      style={{
        backgroundImage: `url('/images/bg2.png')`, // Path to your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh', // Full viewport height
      }}
    >
      <Stack tokens={{ childrenGap: 10 }} padding={20} styles={{ root: { color: '#ffffff' } }}>
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
    </div>
  );
};

export default PhotoAlbum;
