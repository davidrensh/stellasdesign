// src/pages/Services.tsx
import React, { useEffect, useState } from 'react';
import { Stack, Text } from '@fluentui/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

interface Service {
  id: string;
  name: string;
  price: number;
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const servicesCollection = collection(db, 'services');
      const serviceSnapshot = await getDocs(servicesCollection);
      const serviceList = serviceSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Service[];
      setServices(serviceList);
    };

    fetchServices();
  }, []);

  return (
    <Stack tokens={{ childrenGap: 10 }} padding={20}>
      <Text variant="xLarge">Our Services</Text>
      {services.map(service => (
        <Stack key={service.id} horizontal tokens={{ childrenGap: 15 }}>
          <Text variant="large">{service.name}</Text>
          <Text variant="large">${service.price}</Text>
        </Stack>
      ))}
    </Stack>
  );
};

export default Services;
