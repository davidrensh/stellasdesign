// src/pages/ContactUs.tsx
import React from 'react';
import { Stack, Text, TextField, PrimaryButton } from '@fluentui/react';
import './Services.css'; // Ensure you have this CSS file for styling

const ContactUs: React.FC = () => {
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
       
       <Stack
        // horizontalAlign="center"
        // verticalAlign="center"
        // verticalFill
        tokens={{ childrenGap: 20 }}
        padding={20}
        styles={{
          root: {
            color: '#ffffff', // Adjust text color for contrast
            textAlign: 'left',
            width: '100%',
          },
        }}
      >
      {/* Page Title */}
      <Text variant="xxLarge">Contact Us</Text>
      <div className="card2">
      {/* Introductory Text */}
      <Text variant="large">
        We’d love to hear from you! Whether you have a question about services, pricing, availability, or anything else, our team is ready to answer all your questions.
      </Text>

      {/* Contact Details */}
      <Stack tokens={{ childrenGap: 10 }}>
        <Text variant="large">Phone: 425-737-7342</Text>
        <Text variant="large">Email: stellaluo85@gmail.com</Text>
        <Text variant="large">Address: 28100 Willet Way, Wesley Chapel, FL 33543</Text>
      </Stack>
</div>
      {/* Google Maps Embed */}
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', height: '400px' }}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.6890489450557!2d-82.35452948900353!3d28.186370704101098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b1a0084ba26d%3A0x36318629bb63825f!2sSalon%20Lofts%20Wiregrass!5e0!3m2!1sen!2sus!4v1723676513373!5m2!1sen!2sus"
 width="100%"
 height="100%"
 style={{ border: 0 }}
 allowFullScreen={false}
 loading="lazy"
></iframe>
        
      </div>

      {/* Inquiry Form */}
      {/* <Stack tokens={{ childrenGap: 10 }}>
        <Text variant="xLarge">Send Us a Message</Text>
        <TextField label="Name" required />
        <TextField label="Email" type="email" required />
        <TextField label="Message" multiline rows={5} required />
        <PrimaryButton text="Submit" />
      </Stack> */}
    </Stack>
    </div>
  );
};

export default ContactUs;
