import React, { useState } from 'react';
import { CommandBar, ICommandBarItemProps, DefaultButton, IButtonProps, IconButton, ContextualMenu, IContextualMenuProps } from '@fluentui/react';
import './Header.css'; // Ensure this import is correct and in the right place

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items: ICommandBarItemProps[] = [
    { key: 'home', text: 'Home', href: '/' },
    { key: 'photoAlbum', text: 'Photo Album', href: '/photo-album' },
    { key: 'services', text: 'Services', href: '/services' },
  ];

  const farItems: ICommandBarItemProps[] = [
    { key: 'schedule', text: 'Schedule Appointment', href: '/schedule' },
    { key: 'contact', text: 'Contact Us', href: '/contact-us' },
  ];

  const burgerMenuItem: ICommandBarItemProps = {
    key: 'burgerMenu',
    iconProps: { iconName: 'GlobalNavButton' },
    onClick: () => setIsMenuOpen(!isMenuOpen),
    ariaLabel: 'Menu',
    styles: {
      root: {
        display: 'none', // Hidden by default
        '@media only screen and (max-width: 768px)': {
          display: 'block',
        },
      },
    },
  };

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
            color: 'black',
            selectors: {
              ':hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
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

  const menuProps: IContextualMenuProps = {
    items: [...items, ...farItems],
    onDismiss: () => setIsMenuOpen(false),
  };

  return (
    <div style={{ position: 'relative', zIndex: 1000 }}>
      <CommandBar
        items={[burgerMenuItem, ...items]} // Add burger menu item here
        farItems={farItems}
        buttonAs={CustomButton}
        styles={{
          root: {
            padding: '0 10px',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            boxShadow: 'none',
            borderBottom: 'none',
            position: 'absolute',
            width: '100%',
          },
          primarySet: {
            childrenGap: 10,
            display: 'flex',
            '@media only screen and (max-width: 768px)': {
              childrenGap: 5,
            },
          },
          secondarySet: {
            childrenGap: 10,
            display: 'flex',
            '@media only screen and (max-width: 768px)': {
              childrenGap: 5,
            },
          },
        }}
      />
      {isMenuOpen && (
        <ContextualMenu
          {...menuProps}
          target={`#header-menu`}
          gapSpace={0}
          beakWidth={0}
          alignTargetEdge={true}
          directionalHintFixed={true}
        />
      )}
    </div>
  );
};

export default Header;
