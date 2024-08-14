// src/components/Header.tsx
import React from 'react';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react';

const Header: React.FC = () => {
  const items: ICommandBarItemProps[] = [
    { key: 'home', text: 'Home', href: '/' },
    { key: 'photoAlbum', text: 'Photo Album', href: '/photo-album' },
    { key: 'services', text: 'Services', href: '/services' },
    { key: 'schedule', text: 'Schedule Appointment', href: '/schedule' },
  ];

  return <CommandBar items={items} />;
};

export default Header;
