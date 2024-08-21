import React from 'react';
import {makeStyles , Card, Text } from '@fluentui/react-components';
import './Services.css'; // Ensure you have this CSS file for styling
const useStyles = makeStyles({
  card: {
    backgroundColor: '#ffffff', // Set to your desired color
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Example shadow
    borderRadius: '8px',
    padding: '16px',
    width: '100%', // Adjust as needed
  },
});

const Services: React.FC = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundImage: `url('/images/bg3.png')`, // Replace with the path to your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure the background covers the entire viewport height
        padding: '20px', // Optional: Add padding to keep the content within view
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center'
      }}
    >
              <Text  size={1000} style={{ fontWeight: 'bold',fontSize: '4.5em', marginBottom: 10 }}>
            Services
          </Text>
      <div className="card-container">
        {/* Haircuts & Other Card */}
        <Card className="card">

          <Text className="card-title">Haircuts & Other</Text>
          <div className="card-content">
            <div className="price-item">
              <Text className="service-name">Consultation</Text>
              <Text className="service-price">$0</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Toner</Text>
              <Text className="service-price">$25 - $35</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Toner with Blow-Out</Text>
              <Text className="service-price">$65 - $85</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Conditioning Treatment with Blow-Out</Text>
              <Text className="service-price">$75 - $85</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Shampoo</Text>
              <Text className="service-price">$10</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Women’s Blow-Out</Text>
              <Text className="service-price">$40 - $50</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Luxury Blowout</Text>
              <Text className="service-price">$50 - $60</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Women’s Haircut & Blow-Out</Text>
              <Text className="service-price">$40 - $50</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Men’s Haircut</Text>
              <Text className="service-price">$25 - $35</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Smoothing Treatment</Text>
              <Text className="service-price">$150 - $250</Text>
            </div>
          </div>
        </Card>

        {/* Touch-Ups & Highlights Card */}
        <Card className="card">
          <Text className="card-title">Touch-Ups & Highlights</Text>
          <div className="card-content">
            <div className="price-item">
              <Text className="service-name">Base Color & Blow-Out (Roots Only)</Text>
              <Text className="service-price">$100 - $115</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Base Color, Haircut & Blow-Out (Roots Only)</Text>
              <Text className="service-price">$105 - $125</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Base Color Pull Through</Text>
              <Text className="service-price">$115 - $125</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Express Base Color Touch-Up</Text>
              <Text className="service-price">$55 - $65</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Partial Highlight, Toner, & Blow-Out</Text>
              <Text className="service-price">$145 - $175</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Partial Highlight, Toner, Haircut</Text>
              <Text className="service-price">$150 - $180</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Highlight, Toner, Blow-Out</Text>
              <Text className="service-price">$165 - $195</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Highlight, Toner, Haircut</Text>
              <Text className="service-price">$170 - $200</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Base Color, Highlight, Toner, Blow-Out</Text>
              <Text className="service-price">$180 - $210</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Base Color, Highlight, Toner, Haircut</Text>
              <Text className="service-price">$185 - $215</Text>
            </div>
          </div>
        </Card>

        {/* Specialty Color Card */}
        <Card className="card">
          <Text className="card-title">Specialty Color</Text>
          <div className="card-content">
            <div className="price-item">
              <Text className="service-name">Men’s Color</Text>
              <Text className="service-price">$55 - $65</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Balayage - Consultation Required</Text>
              <Text className="service-price">-</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Color Correction - Consultation Required</Text>
              <Text className="service-price">-</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Dimensional Color - Consultation Required</Text>
              <Text className="service-price">-</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">All Over Bleach & Tone - Consultation Required</Text>
              <Text className="service-price">-</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Fashion Color - Consultation Required</Text>
              <Text className="service-price">-</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Double Process - Consultation Required</Text>
              <Text className="service-price">-</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Ombre - Consultation Required</Text>
              <Text className="service-price">-</Text>
            </div>
          </div>
        </Card>

        {/* Extensions Card */}
        <Card className="card">
          <Text className="card-title">Extensions</Text>
          <div className="card-content">
            <div className="price-item">
              <Text className="service-name">Consultation</Text>
              <Text className="service-price">$0</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Halo</Text>
              <Text className="service-price">$340 - $770</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Halo Shampoo Blow-Out</Text>
              <Text className="service-price">$40 - $50</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Implementation Hand Tied</Text>
              <Text className="service-price">$150 per row</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Implementation I-Tip</Text>
              <Text className="service-price">$125 per pack</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Implementation Tape-in</Text>
              <Text className="service-price">$100 per 10 pieces</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Removal</Text>
              <Text className="service-price">$50</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Hair Consultation Required</Text>
              <Text className="service-price">-</Text>
            </div>
          </div>
        </Card>

        {/* Waxing & Brow Tinting Card */}
        <Card className="card">
          <Text className="card-title">Waxing & Brow Tinting</Text>
          <div className="card-content">
            <div className="price-item">
              <Text className="service-name">Brow Shaping</Text>
              <Text className="service-price">$15</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Full Face</Text>
              <Text className="service-price">$36</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Lip</Text>
              <Text className="service-price">$12</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Chin</Text>
              <Text className="service-price">$12</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Eyebrow Tinting</Text>
              <Text className="service-price">$12</Text>
            </div>
            <div className="price-item">
              <Text className="service-name">Eyebrow Tinting & Wax</Text>
              <Text className="service-price">$22</Text>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Services;
