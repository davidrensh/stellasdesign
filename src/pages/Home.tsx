// src/pages/Home.tsx
import React from 'react';
import { Stack, Text, Image } from '@fluentui/react';
import './Services.css';

const Home: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/images/bg2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%', // Full viewport height
      }}
    >
              
      <Stack
        horizontalAlign="center"
        verticalAlign="center"
        verticalFill
        tokens={{ childrenGap: 20 }}
        padding={20}
        styles={{
          root: {
            color: '#ffffff', // Adjust text color for contrast
            textAlign: 'center',
            width: '100%',
          },
        }}
      >
<div className="card2">
<Stack
        tokens={{ childrenGap: 20 }}
        padding={20}
        styles={{
          root: {
            color: '#ffffff', // Adjust text color for contrast
            textAlign: 'center',
            width: '1000',
          },
        }}
      >
        <Text variant="xxLarge">Welcome to Stella's Design!</Text>
        <br />
        <Text variant="large">Your go-to salon for amazing professional hair designs.</Text><br />
        <Text variant="large" style={{ fontWeight: 'bold', marginTop: 10 }}>
          Grand Opening at our new location: August 19, 2024.
        </Text>
        <Stack tokens={{ childrenGap: 10 }}>
        <Text variant="large">Phone: 425-737-7342</Text>
        <Text variant="large">Email: stellaluo85@gmail.com</Text>
        <Text variant="large">Address: 28100 Willet Way, Wesley Chapel, FL 33543</Text>
      </Stack>
        </Stack></div>
        <Image
          src="/images/stellasdesign_main.jpg"
          alt="Stella's Design"
          width={600}
          // height={1000}
          styles={{ root: { borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' } }}
        />
      </Stack>
    </div>
  );
};

export default Home;
