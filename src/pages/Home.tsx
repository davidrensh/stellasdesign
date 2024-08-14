// src/pages/Home.tsx
import React from 'react';
import { Stack, Text, Image } from '@fluentui/react';

const Home: React.FC = () => {
  return (
    <Stack horizontalAlign="center" verticalAlign="center" verticalFill tokens={{ childrenGap: 20 }} padding={20}>
      <Text variant="xxLarge">Welcome to Stella's Design!</Text>
      <Text variant="large">Your go-to salon for amazing hair designs.</Text>
      
      {/* Add the static image */}
      <Image
        src="/images/stellasdesign_main.jpg"
        alt="Stella's Design"
        width={600}
        height={600}
        styles={{ root: { borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' } }}
      />
    </Stack>
  );
};

export default Home;
