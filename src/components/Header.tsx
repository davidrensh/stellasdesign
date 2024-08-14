// src/components/Header.tsx
import React from 'react';
import { CommandBar, ICommandBarItemProps, DefaultButton, IButtonProps } from '@fluentui/react';

const Header: React.FC = () => {
  const items: ICommandBarItemProps[] = [
    { key: 'home', text: 'Home', href: '/' },
    { key: 'photoAlbum', text: 'Photo Album', href: '/photo-album' },
    { key: 'services', text: 'Services', href: '/services' },
    { key: 'schedule', text: 'Schedule Appointment', href: '/schedule' },
    { key: 'contact', text: 'Contact Us', href: '/contact-us' }, // Add this line
  ];
// Custom button component with larger font size
const CustomButton: React.FC<IButtonProps> = (props) => {
    return (
      <DefaultButton
        {...props}
        styles={{
          root: {
            fontSize: '18px', // Set the desired font size here
            fontWeight: 'normal',
            border: 'none', // Remove border
            backgroundColor: 'transparent', // Ensure background is transparent if needed
            // Optionally remove any box-shadow or focus outlines
            boxShadow: 'none',
            selectors: {
              ':hover': {
                backgroundColor: 'transparent',
                border: 'none',
              },
              ':focus': {
                border: 'none',
                boxShadow: 'none',
              },
            },
          },
          label: {
            fontSize: '18px', // Ensure the label also has the same font size
          },
        }}
      />
    );
  };

  return <CommandBar items={items}
  buttonAs={CustomButton} // Use the custom button component
      styles={{
        root: { padding: '0 20px' }, // Adjust padding if needed
        primarySet: { childrenGap: 15 }, // Space between items
      }}
     />;
};

export default Header;
