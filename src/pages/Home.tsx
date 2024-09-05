import React from 'react';
import { Card, Text, Image } from '@fluentui/react-components';
import './Services.css';

const Home: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/images/bg2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh', // Full viewport height
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      
      {/* Main Content Card */}
      <Card
        style={{
          maxWidth: '1000px',
          padding: '40px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
          color: '#ffffff', // Adjust text color for contrast
          // textAlign: 'center',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          // marginRight: '20px', // Space between text and image
        }}
      >
        {/* Welcome Text */}
        <Text style={{ fontSize: '1.7em',fontFamily: 'Verdana',marginBottom: 0 }}>Welcome to Stella's Design</Text>

        <Text size={300} style={{ fontSize: '1.3em',fontFamily: 'Verdana',marginBottom: 0 }}>Your go-to salon for amazing professional hair designs since 2011.</Text>
      
        <Text size={300} style={{ fontSize: '1.6em',fontFamily: 'Verdana', fontWeight: 'bold', marginTop: '10px' }}>
          Grand Opening at our new location: August 25, 2024.
        </Text>
        {/* Contact Details */}
        <div >
          <Text size={300}>Phone: 425-737-7342</Text> <br />

          <Text size={300}>Hours: Mon-Sat 10:00am-7:00pm</Text> <br />
          <Text size={300}>Email: stellaluo85@gmail.com</Text> <br />
          <Text size={300}>Address: 28100 Willet Way, Wesley Chapel, FL 33543</Text><br />
          <Text size={400}>(Inside Salon Lofts Wiregrass)</Text>
        </div>

      </Card>


    </div>
  );
};

export default Home;
