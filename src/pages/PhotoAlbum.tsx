import React, { useState, useEffect } from 'react';
import { Card, Image, Text } from '@fluentui/react-components';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebaseConfig';

const PhotoAlbum: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const listRef = ref(storage, 'photos/');
        const res = await listAll(listRef);
        const urls = await Promise.all(
          res.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            return url;
          })
        );
        setImages(urls);
      } catch (err) {
        setError('Failed to load images.');
      }
    };

    fetchImages();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url('/images/bg2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
              <Text  size={1000} style={{ fontWeight: 'bold',fontSize: '4.5em', marginBottom: 10 }}>
              Gallery
          </Text>
      {/* Main Content Card */}
      <Card
        style={{
          maxWidth: '1200px',
          margin: 'auto',
          padding: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
          color: '#ffffff', // Adjust text color for contrast
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Text size={500} style={{ marginBottom: '20px' }}>Hair Design Gallery</Text>
        {error ? (
          <Text size={300} style={{ color: 'red' }}>{error}</Text>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            {images.map((url, index) => (
              <Card
                key={index}
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                <Image src={url} alt={`Hair Design ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Card>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};

export default PhotoAlbum;
