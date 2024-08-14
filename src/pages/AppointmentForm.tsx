// src/pages/AppointmentForm.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Stack, TextField, PrimaryButton, Text } from '@fluentui/react';
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
    <Stack horizontalAlign="center" verticalAlign="center" verticalFill tokens={{ childrenGap: 20 }} padding={20}>
      <Text variant="xLarge">Schedule an Appointment</Text>
      <Text variant="large">Call Stella: 425-737-7342</Text>
      <Text variant="large">Or call: 425-908-0277</Text>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <Stack tokens={{ childrenGap: 15 }}>
          <TextField label="Name" {...register('name', { required: true })} />
          <TextField label="Phone" {...register('phone', { required: true })} />
          <TextField label="Date" {...register('date', { required: true })} type="date" />
          <TextField label="Time" {...register('time', { required: true })} type="time" />
          <PrimaryButton type="submit" text="Schedule Appointment" />
        </Stack>
      </form> */}
    </Stack>
  );
};

export default AppointmentForm;
