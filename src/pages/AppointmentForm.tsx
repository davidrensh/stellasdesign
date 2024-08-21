import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Card, Text } from '@fluentui/react-components';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

interface AppointmentFormInputs {
  name: string;
  phone: string;
  date: string;
  time: string;
}

const AppointmentForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<AppointmentFormInputs>();

  const onSubmit: SubmitHandler<AppointmentFormInputs> = async (data) => {
    try {
      await addDoc(collection(db, 'appointments'), data);
      reset();
      alert('Appointment Scheduled Successfully');
    } catch (error) {
      alert('Error scheduling appointment: ' + (error as Error).message);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('/images/bg2.png')`, // Replace with the path to your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure the background covers the entire viewport height
        padding: '20px', // Optional: Add padding to keep the content within view
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
      }}
    >
      {/* Title at the top */}
      <div style={{ 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '20px' 
      }}>
        <Text size={1000} style={{ 
          fontWeight: 'bold',
          fontSize: '4.5em',
          fontFamily: 'Verdana',
          textAlign: 'center',
          color: '#fff', // Optional: Adjust text color for better contrast
        }}>
          Schedule an Appointment
        </Text>
      </div>

      {/* Card centered in the middle */}
      <Card className="appointment-card" style={{ 
        maxWidth: '600px', 
        width: '100%', 
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Optional: Add a slight background color to the card
      }}>
        <div className="card-content">
          <Text className="card-subtitle" style={{ 
            fontSize: '1.2em',
            fontFamily: 'Verdana',
            marginBottom: '10px' 
          }}>
            Call Stella: 425-737-7342
          </Text>
          <Text className="card-subtitle" style={{ 
            fontSize: '1.2em',
            fontFamily: 'Verdana',
            marginBottom: '10px' 
          }}>
            Or call: 425-908-0277
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default AppointmentForm;
