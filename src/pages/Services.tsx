import React from 'react';
import { Stack, Text } from '@fluentui/react';
import './Services.css'; // Ensure you have this CSS file for styling

const Services: React.FC = () => {
  return (
    <div
    style={{
      backgroundImage: `url('/images/bg3.png')`, // Replace with the path to your background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', // Ensure the background covers the entire viewport height
      padding: '20px', // Optional: Add padding to keep the content within view
    }}
  >
    <Stack tokens={{ childrenGap: 20 }} padding={20}>
      <Stack horizontal tokens={{ childrenGap: 20 }} wrap>
        {/* Haircuts & Other Card */}
        <div className="card">
          <Stack tokens={{ childrenGap: 20 }} padding={20}>
            <Text variant="xLarge">Haircuts & Other</Text>
            
            <Stack tokens={{ childrenGap: 10 }}>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Consultation</Text>
                <Text variant="large">$0</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Toner</Text>
                <Text variant="large">$25 - $35</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Toner with Blow-Out</Text>
                <Text variant="large">$65 - $85</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Conditioning Treatment with Blow-Out</Text>
                <Text variant="large">$75 - $85</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Shampoo</Text>
                <Text variant="large">$10</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Women’s Blow-Out</Text>
                <Text variant="large">$40 - $50</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Luxury Blowout</Text>
                <Text variant="large">$50 - $60</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Women’s Haircut & Blow-Out</Text>
                <Text variant="large">$40 - $50</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Men’s Haircut</Text>
                <Text variant="large">$25 - $35</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Smoothing Treatment</Text>
                <Text variant="large">$150 - $250</Text>
              </Stack>
            </Stack>
          </Stack>
        </div>

        {/* Touch-Ups & Highlights Card */}
        <div className="card">
          <Stack tokens={{ childrenGap: 20 }} padding={20}>
            <Text variant="xLarge">Touch-Ups & Highlights</Text>
            
            <Stack tokens={{ childrenGap: 10 }}>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Base Color & Blow-Out (Roots Only)</Text>
                <Text variant="large">$100 - $115</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Base Color, Haircut & Blow-Out (Roots Only)</Text>
                <Text variant="large">$105 - $125</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Base Color Pull Through</Text>
                <Text variant="large">$115 - $125</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Express Base Color Touch-Up</Text>
                <Text variant="large">$55 - $65</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Partial Highlight, Toner, & Blow-Out</Text>
                <Text variant="large">$145 - $175</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Partial Highlight, Toner, Haircut</Text>
                <Text variant="large">$150 - $180</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Highlight, Toner, Blow-Out</Text>
                <Text variant="large">$165 - $195</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Highlight, Toner, Haircut</Text>
                <Text variant="large">$170 - $200</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Base Color, Highlight, Toner, Blow-Out</Text>
                <Text variant="large">$180 - $210</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Base Color, Highlight, Toner, Haircut</Text>
                <Text variant="large">$185 - $215</Text>
              </Stack>
            </Stack>
          </Stack>
        </div>

        {/* Specialty Color Card */}
        <div className="card">
          <Stack tokens={{ childrenGap: 20 }} padding={20}>
            <Text variant="xLarge">Specialty Color</Text>
            
            <Stack tokens={{ childrenGap: 10 }}>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Men’s Color</Text>
                <Text variant="large">$55 - $65</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Balayage - Consultation Required</Text>
                <Text variant="large">-</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Color Correction - Consultation Required</Text>
                <Text variant="large">-</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Dimensional Color - Consultation Required</Text>
                <Text variant="large">-</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">All Over Bleach & Tone - Consultation Required</Text>
                <Text variant="large">-</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Fashion Color - Consultation Required</Text>
                <Text variant="large">-</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Double Process - Consultation Required</Text>
                <Text variant="large">-</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Ombre - Consultation Required</Text>
                <Text variant="large">-</Text>
              </Stack>
            </Stack>
          </Stack>
        </div>

        {/* Extensions Card */}
        <div className="card">
          <Stack tokens={{ childrenGap: 20 }} padding={20}>
            <Text variant="xLarge">Extensions</Text>
            
            <Stack tokens={{ childrenGap: 10 }}>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Consultation</Text>
                <Text variant="large">$0</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Halo</Text>
                <Text variant="large">$340 - $770</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Halo Shampoo Blow-Out</Text>
                <Text variant="large">$40 - $50</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Implementation Hand Tied</Text>
                <Text variant="large">$150 per row</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Implementation I-Tip</Text>
                <Text variant="large">$125 per pack</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Implementation Tape-in</Text>
                <Text variant="large">$100 per 10 pieces</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Removal</Text>
                <Text variant="large">$50</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Hair Consultation Required</Text>
                <Text variant="large">-</Text>
              </Stack>
            </Stack>
          </Stack>
        </div>

        {/* Waxing & Brow Tinting Card */}
        <div className="card">
          <Stack tokens={{ childrenGap: 20 }} padding={20}>
            <Text variant="xLarge">Waxing & Brow Tinting</Text>
            
            <Stack tokens={{ childrenGap: 10 }}>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Brow Shaping</Text>
                <Text variant="large">$15</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Full Face</Text>
                <Text variant="large">$36</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Lip</Text>
                <Text variant="large">$12</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Chin</Text>
                <Text variant="large">$12</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Eyebrow Tinting</Text>
                <Text variant="large">$12</Text>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 15 }}>
                <Text variant="large">Eyebrow Tinting & Wax</Text>
                <Text variant="large">$22</Text>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </Stack>
    </Stack>
    </div>
  );
};

export default Services;
