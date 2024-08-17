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
        display: 'block', // Default for mobile
        '@media only screen and (min-width: 769px)': {
          display: 'none',
        },
      },
    },
  };

  const titleItem: ICommandBarItemProps = {
    key: 'title',
    text: "Stella's Design",
    styles: {
      root: {
        fontSize: '38px',
        fontWeight: 'bold',
        fontFamily: 'Edwardian Script ITC',
        color: '#333',
        textAlign: 'center',
        width: '100%',
        margin: '0 auto',
        '@media only screen and (max-width: 768px)': {
          fontSize: '38px',
          fontFamily: 'Edwardian Script ITC',
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
            backgroundColor: 'rgba(255, 255, 255, 0.5) !important', // Semi-transparent white
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
  const TitleButton: React.FC<IButtonProps> = (props) => {
    return (
      <DefaultButton
        {...props}
        styles={{
          root: {
            fontSize: '38px',
            fontFamily: 'Edwardian Script ITC',
            fontWeight: 'normal',
            border: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.5) !important', // Semi-transparent white
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
            fontSize: '38px',
          },
        }}
      />
    );
  };
  const mobileStyles = {
    root: {
      padding: '0 5px',
      backgroundColor: 'rgba(255, 255, 255, 0.5) !important', // Semi-transparent white
      boxShadow: 'none',
      borderBottom: 'none',
      width: '100%',
    },
    primarySet: {
      childrenGap: 5,
      display: 'flex',
      flexDirection: 'column', // Stack title on top of items
      alignItems: 'center', // Center title
    },
    secondarySet: {
      childrenGap: 5,
      display: 'flex',
    },
  };

  const desktopStyles = {
    root: {
      padding: '0 10px',
      backgroundColor: 'rgba(255, 255, 255, 0.5) !important', // Semi-transparent white
      boxShadow: 'none',
      borderBottom: 'none',
      width: '100%',
    },
    primarySet: {
      childrenGap: 10,
      display: 'flex',
    },
    secondarySet: {
      childrenGap: 10,
      display: 'flex',
    },
  };

  const menuProps: IContextualMenuProps = {
    items: [...items, ...farItems],
    onDismiss: () => setIsMenuOpen(false),
  };

  return (
    <div style={{ position: 'relative', zIndex: 1000 }}>
      {/* Burger Menu Button */}
      <IconButton
        iconProps={{ iconName: 'GlobalNavButton' }}
        ariaLabel="Menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        styles={{
          root: {
            display: 'none', // Hidden by default
            position: 'absolute',
            top: '10px',
            left: '20px',
            zIndex: 1001,
            '@media only screen and (max-width: 768px)': {
              display: 'block',
            },
          },
        }}
      />
      
      {/* Desktop CommandBar */}
      <div className="desktop-command-bar">
        <CommandBar
          items={items}
          farItems={farItems}
          buttonAs={CustomButton}
          styles={desktopStyles}
        />
      </div>

      {/* Mobile CommandBar */}
      <div className="mobile-command-bar">
        <CommandBar
          items={[titleItem]} // Include title item in mobile CommandBar
          buttonAs={TitleButton}
          styles={mobileStyles}
        />
       </div>

      {isMenuOpen && (
        <ContextualMenu
          items={[...items, ...farItems]}
          onDismiss={() => setIsMenuOpen(false)}
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
