import React from 'react';
import { CommandBar, ICommandBarItemProps, DefaultButton, IButtonProps } from '@fluentui/react';

const Header: React.FC = () => {
  const items: ICommandBarItemProps[] = [
    { key: 'home', text: 'Home', href: '/' },
    { key: 'photoAlbum', text: 'Photo Album', href: '/photo-album' },
    { key: 'services', text: 'Services', href: '/services' },
    { key: 'schedule', text: 'Schedule Appointment', href: '/schedule' },
    { key: 'contact', text: 'Contact Us', href: '/contact-us' },
  ];

  const CustomButton: React.FC<IButtonProps> = (props) => {
    return (
      <DefaultButton
        {...props}
        styles={{
          root: {
            fontSize: '18px',
            fontWeight: 'normal',
            border: 'none',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            color: 'black', // Ensure text is visible against the background
            selectors: {
              ':hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)', // Optional slight hover effect
              },
              ':focus': {
                border: 'none',
                boxShadow: 'none',
              },
            },
          },
          label: {
            fontSize: '18px',
          },
        }}
      />
    );
  };

  return (
    <CommandBar
      items={items}
      buttonAs={CustomButton}
      styles={{
        root: {
          padding: '0 20px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // Half transparent white background
          boxShadow: 'none',
          borderBottom: 'none',
          position: 'absolute', // Positioning to ensure it overlays the background image
          width: '100%', // Ensure it covers the full width
          zIndex: 1000, // Bring it to the front
        },
        primarySet: {
          childrenGap: 15,
        },
      }}
    />
  );
};

export default Header;
