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
        // alignItems: 'center', // Center horizontally
        // justifyContent: 'center', // Center vertically
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
          fontSize: '1.7em',
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

// import React, { useState, useEffect } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { Card, Text, Input, Button, Dropdown, Option } from '@fluentui/react-components';
// import { DatePicker } from "@fluentui/react-datepicker-compat";
// import { Field, makeStyles } from "@fluentui/react-components";
// import type { DatePickerProps } from "@fluentui/react-datepicker-compat";
// import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
// import { db } from '../firebaseConfig';

// interface AppointmentFormInputs {
//   name: string;
//   phone: string;
//   date: Date;
//   time: string;
//   serviceType: string;
// }
// const useStyles = makeStyles({
//   control: {
//     maxWidth: "300px",
//   },
// });
// const AppointmentForm: React.FC = () => {
//   const { register, handleSubmit, setValue, reset } = useForm<AppointmentFormInputs>();
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [timeSlots, setTimeSlots] = useState<Date[]>([]);
//   const styles = useStyles();
//   useEffect(() => {
//     if (selectedDate) {
//       setTimeSlots(generateTimeSlotsForDay(selectedDate, 10, 19)); // Generate slots for the selected day from 10 AM to 7 PM
//     }
//   }, [selectedDate]);

//   const onSubmit: SubmitHandler<AppointmentFormInputs> = async (data) => {
//     try {
//       // Format the date for Firebase storage (e.g., "2023-09-15")
//       const formattedDate = selectedDate?.toISOString().split('T')[0];

//       // Query existing appointments for the selected date and time
//       const q = query(
//         collection(db, 'appointments'),
//         where('date', '==', formattedDate),
//         where('time', '==', data.time)
//       );
//       const querySnapshot = await getDocs(q);

//       // Handle double booking logic here (e.g., check for service type)
//       if (querySnapshot.size < 2 || (querySnapshot.size === 2 && isDoubleBookingAllowed(querySnapshot.docs, data.serviceType))) {
//         // Add the new appointment to Firestore
//         await addDoc(collection(db, 'appointments'), {
//           ...data,
//           date: formattedDate
//         });
//         reset();
//         alert('Appointment Scheduled Successfully');
//       } else {
//         alert('This time slot is fully booked.');
//       }
//     } catch (error) {
//       alert('Error scheduling appointment: ' + (error as Error).message);
//     }
//   };

//   // Function to handle double booking for specific service types
//   const isDoubleBookingAllowed = (existingBookings: any[], serviceType: string) => {
//     // Allow double booking for specific service types (e.g., 'Color')
//     const allowedDoubleBookingTypes = ['Color'];
//     return allowedDoubleBookingTypes.includes(serviceType);
//   };

//   // Utility function to generate time slots for a specific day
//   const generateTimeSlotsForDay = (date: Date, startHour: number, endHour: number) => {
//     const slots = [];
//     for (let hour = startHour; hour < endHour; hour++) {
//       for (let minutes = 0; minutes < 60; minutes += 30) {
//         const slotTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hour, minutes);
//         slots.push(slotTime);
//       }
//     }
//     return slots;
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url('/images/bg2.png')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         padding: '20px',
//         display: 'flex',
//         flexDirection: 'column',
//       }}
//     >
//       {/* Title at the top */}
//       <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
//         <Text size={1000} style={{ fontWeight: 'bold', fontSize: '1.7em', fontFamily: 'Verdana', textAlign: 'center', color: '#fff' }}>
//           Schedule an Appointment
//         </Text>
//       </div>

//       {/* Card centered in the middle */}
//       <Card className="appointment-card" style={{ maxWidth: '600px', width: '100%', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Input placeholder="First Name" {...register('name', { required: true })} />
//           <Input placeholder="Phone Number" {...register('phone', { required: true })} />

 
//       <DatePicker
//         className={styles.control}
//         placeholder="Select a date..."
//         onSelectDate={(date) => {
//           if (date) {
//             setSelectedDate(date);
//             setValue('date', date); // setValue should only be called with a valid Date
//           } else {
//             setSelectedDate(null); // Set to null if the date is undefined
//           }
//         }}
//       />

//           {/* Time Slot Dropdown */}
//           {selectedDate && (
//             <Dropdown placeholder="Select a Time Slot" {...register('time', { required: true })}>
//               {timeSlots.map((slot, index) => (
//                 <Option key={index} value={slot.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}>
//                   {slot.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                 </Option>
//               ))}
//             </Dropdown>
//           )}

//           <Input placeholder="Service Type (e.g., Haircut, Color)" {...register('serviceType', { required: true })} />
//           <Button type="submit">Book Appointment</Button>
//         </form>
//       </Card>
//     </div>
//   );
// };

// export default AppointmentForm;
