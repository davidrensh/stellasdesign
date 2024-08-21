import React, { useState, useEffect } from 'react';
import { Toolbar, Button, Menu, MenuTrigger, MenuList, MenuItem } from '@fluentui/react-components';
import { NavigationRegular } from '@fluentui/react-icons';
import { useNavigate } from 'react-router-dom';
import StyledMenuPopover from './StyledMenuPopover';
import './Header.css';

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const items = [
    { key: 'home', text: 'Home', href: '/' },
    { key: 'photoAlbum', text: 'Photo Album', href: '/photo-album' },
    { key: 'services', text: 'Services', href: '/services' },
    { key: 'schedule', text: 'Schedule Appointment', href: '/schedule' },
    { key: 'about', text: 'About Stella', href: '/about-stella' },
    { key: 'contact', text: 'Contact Us', href: '/contact-us' },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toolbarStyles = {
    root: {
      padding: '0 10px',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      boxShadow: 'none',
      borderBottom: 'none',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative' as 'relative',
    },
    title: {
      fontSize: '38px',
      fontWeight: 'bold',
      fontFamily: 'Edwardian Script ITC',
      color: '#333',
      textAlign: 'left',
      margin: '0 auto',
    } as React.CSSProperties,
    mobileMenuButton: {
      display: isMobile ? 'block' : 'none',
      border: 'none',
      boxShadow: 'none',
      color: 'black',
      ':hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
      }
    },
    button: {
      fontSize: '16px',
      fontWeight: 'normal',
      border: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      boxShadow: 'none',
      color: 'black',
    },
    menuList: {
      padding: '0',
      margin: '0',
      backgroundColor: '#ffffff',
    },
    menuItem: {
      backgroundColor: '#ffffff',
      color: 'black',
      selectors: {
        ':hover': {
          backgroundColor: '#f0f0f0',
        },
      },
    },
    mobileHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    }
  };

  return (
    <div>
      {/* Desktop Toolbar */}
      {!isMobile && (
        <Toolbar style={toolbarStyles.root}>
          <div style={toolbarStyles.title}>Stella's Design</div>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', display: 'flex', gap: '10px' }}>
            {items.map((item) => (
              <Button
                key={item.key}
                onClick={() => navigate(item.href)}
                style={toolbarStyles.button}
              >
                {item.text}
              </Button>
            ))}
          </div>
        </Toolbar>
      )}

      {/* Mobile Menu */}
      {isMobile && (
        <div style={toolbarStyles.mobileHeader}>
          <Button
            icon={<NavigationRegular />}
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={toolbarStyles.mobileMenuButton}
          />
          <div style={toolbarStyles.title}>Stella's Design</div>
          {isMenuOpen && (
            <Menu open={isMenuOpen}>
              <MenuTrigger>
                <StyledMenuPopover>
                  <MenuList style={toolbarStyles.menuList}>
                    {items.map((item) => (
                      <MenuItem
                        key={item.key}
                        onClick={() => {
                          navigate(item.href);
                          setIsMenuOpen(false);
                        }}
                        style={toolbarStyles.menuItem}
                      >
                        {item.text}
                      </MenuItem>
                    ))}
                  </MenuList>
                </StyledMenuPopover>
              </MenuTrigger>
            </Menu>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
