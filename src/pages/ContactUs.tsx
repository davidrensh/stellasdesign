import React from 'react';
import { Card, Text } from '@fluentui/react-components';
import './Services.css'; // Ensure you have this CSS file for styling
import { Link } from "@fluentui/react-link";
import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';

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
      {/* Page Title */}
      <Text size={600} style={{ fontSize: '36px', fontWeight: 'bold',  color: '#ffffff', textAlign: 'center', marginBottom: '20px' }}>
        Contact Us
      </Text>

      <Card
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
          color: '#ffffff', // Adjust text color for contrast
          borderRadius: '8px',
        }}
      >
        {/* Introductory Text */}
        <Text size={300} style={{  fontSize: '1.3em',fontFamily: 'Verdana',marginBottom: '20px' }}>
          We’d love to hear from you! Whether you have a question about services, pricing, availability, or anything else, our team is ready to answer all your questions.
        </Text>

        {/* Contact Details */}
        <div style={{ marginBottom: '20px' }}>
          <Text size={300}>Phone: 425-737-7342</Text> <br />

          <Text size={300}>Hours: Mon-Sat 10:00am-7:00pm</Text> <br />
          <Text size={300}>Email: stellaluo85@gmail.com</Text> <br />
          <Text size={300}>Address: 28100 Willet Way, Wesley Chapel, FL 33543</Text><br />
          <Text size={400}>(Inside Salon Lofts Wiregrass)</Text>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <a href="https://www.facebook.com/profile.php?id=100056367653190" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#4267B2' }}>
        <FaFacebook style={{ fontSize: 24 }} />
      </a>
      <a href="https://www.instagram.com/stellas_hair__design" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#C13584' }} >
        <FaInstagram style={{ fontSize: 24 }} />
      </a>
      <a href="https://www.google.com/search?q=StellasDesign+reviews" target="_blank" rel="noopener noreferrer"  style={{ margin: '0 10px', color: '#4285F4' }} >
        <FaGoogle style={{ fontSize: 24 }} />
      </a>
    </div>
        {/* Google Maps Embed */}
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', height: '400px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.6890489450557!2d-82.35452948900353!3d28.186370704101098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b1a0084ba26d%3A0x36318629bb63825f!2sSalon%20Lofts%20Wiregrass!5e0!3m2!1sen!2sus!4v1723676513373!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>

        {/* Inquiry Form (Commented Out) */}
        {/* <Card.Section>
          <Text size={400} style={{ marginBottom: '10px' }}>Send Us a Message</Text>
          <TextField label="Name" required />
          <TextField label="Email" type="email" required />
          <TextField label="Message" multiline rows={5} required />
          <PrimaryButton text="Submit" />
        </Card.Section> */}
      </Card>
    </div>
  );
};

export default ContactUs;
