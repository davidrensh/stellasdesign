// src/pages/AboutStella.tsx
import React from 'react';
import { makeStyles,Text, Image, Card, CardHeader} from '@fluentui/react-components';
import './AboutStella.css'; // Ensure you have a CSS file for styling if needed

const useStyles = makeStyles({
    card: {
      margin: "auto",
      width: "720px",
      maxWidth: "100%",
    },
  });
  

const AboutStella: React.FC = () => {
    const styles = useStyles();

  return (
    <div
    style={{
      backgroundImage: `url('/images/bg.jpg')`, // Replace with the path to your background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', // Ensure the background covers the entire viewport height
      padding: '20px', // Optional: Add padding to keep the content within view
    }}
  >
      <Card className={styles.card}  style={{
        maxWidth: '600px',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff', // Semi-transparent background
        justifyContent: 'center',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Correct shadow property
        border: '1px solid lightgray', // Gray border color
      }}>
          <Text  size={1000} style={{ fontWeight: 'bold',fontSize: '4.5em',fontFamily: 'Edwardian Script ITC, cursive', marginBottom: 10 }}>
            Stella's Design
          </Text>
          <Image 
            src="/images/stella_profile.jpg" 
            alt="Stella's Profile Picture" 
            width={300} 
            height={600} 
            
          />
          <Text  size={500} style={{ fontSize: '2em',fontFamily: 'Verdana',marginBottom: 20 }}>
            Where Style Meets Passion
          </Text>
          <Text  size={500}  style={{ fontSize: '1.3em',fontFamily: 'Verdana',marginBottom: 20 ,backgroundColor: '#ffffff'}}>
            Stella is a high-end hair designer with over 13 years of professional experience in the beauty industry. She specializes in modern and classic styles, ensuring each client leaves her salon feeling confident and beautiful. Passionate about her craft, Stella stays up to date with the latest trends and techniques.
          </Text>
      </Card>
      </div>
  );
};

export default AboutStella;
