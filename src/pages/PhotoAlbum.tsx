import React, { useState } from 'react';
import { Card, Image, Text, TabList, Tab } from '@fluentui/react-components';
import type {
  SelectTabData,
  SelectTabEvent,
  TabValue,
} from "@fluentui/react-components";
const PhotoAlbum: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabValue>('compare');

  const handleTabChange = (event: SelectTabEvent, newValue: SelectTabData) => {
    setSelectedTab(newValue.value);
  };

  return (
    <div
      style={{
        backgroundImage: `url('/images/bg2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <Text size={1000} style={{ fontWeight: 'bold', fontSize: '4.5em', marginBottom: 10, color: 'white',  backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      Stella's Design since 2011
      </Text>

      {/* Main Content Card */}
      <Card
        style={{
          maxWidth: '1200px',
          margin: 'auto',
          padding: '20px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          fontSize:'18px'
        }}
      >
        <TabList
          selectedValue={selectedTab}
          onTabSelect={handleTabChange}
          style={{ borderBottom: '3px solid #ccc',marginLeft:'10px', marginBottom: '20px', fontSize:'38px!important' }} // Splitter between tabs and content
        >
          <Tab value="compare" style={{ fontSize:'16px' }}>Beauty Compare &nbsp;|</Tab>
          <Tab value="special" style={{ fontSize:'16px' }}> &nbsp;Special</Tab>
        </TabList>

        {selectedTab === 'compare' && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '20px' }}>
            {/* Hardcoded rows of images */}

            <Card style={{ display: 'flex', flexDirection: 'row',  borderRadius: '8px', overflow: 'hidden' }}>
              <Image src="/images/g10.jpg" alt="Hair Design g10" style={{ width: '50%', objectFit: 'cover' }} />
              <Image src="/images/g11.jpg" alt="Hair Design g11" style={{ width: '50%', objectFit: 'cover' }} />
            </Card>
            <Card style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
              <Image src="/images/g20.jpg" alt="Hair Design g20" style={{ width: '25%', objectFit: 'cover' }} />
              <Image src="/images/g21.jpg" alt="Hair Design g21" style={{ width: '25%', objectFit: 'cover' }} />
              <Image src="/images/g22.jpg" alt="Hair Design g22" style={{ width: '25%', objectFit: 'cover' }} />
              <Image src="/images/g23.jpg" alt="Hair Design g23" style={{ width: '25%', objectFit: 'cover' }} />
            </Card>
            <Card style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
              <Image src="/images/g30.jpg" alt="Hair Design g30" style={{ width: '50%', objectFit: 'cover' }} />
              <Image src="/images/g31.jpg" alt="Hair Design g31" style={{ width: '50%', objectFit: 'cover' }} />
            </Card>
            <Card style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
              <Image src="/images/g40.jpg" alt="Hair Design g40" style={{ width: '50%', objectFit: 'cover' }} />
              <Image src="/images/g41.jpg" alt="Hair Design g41" style={{ width: '50%', objectFit: 'cover' }} />
            </Card>
            <Card style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
              <Image src="/images/g50.jpg" alt="Hair Design g50" style={{ width: '50%', objectFit: 'cover' }} />
              <Image src="/images/g51.jpg" alt="Hair Design g51" style={{ width: '50%', objectFit: 'cover' }} />
            </Card>
            <Card style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
              <Image src="/images/g60.jpg" alt="Hair Design g60" style={{ width: '33%', height: '100%', objectFit: 'cover' }} />
              <Image src="/images/g61.jpg" alt="Hair Design g61" style={{ width: '33%', height: '100%', objectFit: 'cover' }} />
              <Image src="/images/g62.jpg" alt="Hair Design g62" style={{ width: '34%', height: '100%', objectFit: 'cover' }} />
            </Card>
            <Card style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
              <Image src="/images/g70.jpg" alt="Hair Design g70" style={{ width: '50%', objectFit: 'cover' }} />
              <Image src="/images/g71.jpg" alt="Hair Design g71" style={{ width: '50%', objectFit: 'cover' }} />
            </Card>
            <Card style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
              <Image src="/images/g80.jpg" alt="Hair Design g80" style={{ width: '50%', objectFit: 'cover' }} />
              <Image src="/images/g81.jpg" alt="Hair Design g81" style={{ width: '50%', objectFit: 'cover' }} />
            </Card>
            <Card style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
              <Image src="/images/g90.jpg" alt="Hair Design g90" style={{ width: '50%', objectFit: 'cover' }} />
              <Image src="/images/g91.jpg" alt="Hair Design g91" style={{ width: '50%', objectFit: 'cover' }} />
            </Card>
            <Card style={{ display: 'flex',   borderRadius: '8px', overflow: 'hidden' }}>
              <Image src="/images/g0.jpg" alt="Hair Design g0" style={{ width: '100%', objectFit: 'cover' }} />
            </Card>            
          </div>
        )}

        {selectedTab === 'special' && (
          <div style={{ marginTop: '20px' }}>
            {/* Hardcoded individual images */}
            <Card style={{ display: 'flex', flexDirection: 'row', borderRadius: '8px', overflow: 'hidden', marginBottom: '15px' }}>
              <Image src="/images/e0.jpg" alt="Special Design e0" style={{ width: '25%', height: '100%', objectFit: 'cover' }} />
              <Image src="/images/e1.jpg" alt="Special Design e1" style={{ width: '25%', height: '100%', objectFit: 'cover' }} />
              <Image src="/images/e2.jpg" alt="Special Design e2" style={{ width: '25%', height: '100%', objectFit: 'cover' }} />
              <Image src="/images/e3.jpg" alt="Special Design e3" style={{ width: '25%', height: '100%', objectFit: 'cover' }} />
            </Card>
            <Card style={{ display: 'flex', flexDirection: 'row', borderRadius: '8px', overflow: 'hidden', marginBottom: '15px' }}>
              <Image src="/images/e4.jpg" alt="Special Design e4" style={{ width: '20%', height: '100%', objectFit: 'cover' }} />
              <Image src="/images/e5.jpg" alt="Special Design e5" style={{ width: '20%', height: '100%', objectFit: 'cover' }} />
              <Image src="/images/e6.jpg" alt="Special Design e6" style={{ width: '20%', height: '100%', objectFit: 'cover' }} />
              <Image src="/images/e7.jpg" alt="Special Design e7" style={{ width: '20%', height: '100%', objectFit: 'cover' }} />
              <Image src="/images/e8.jpg" alt="Special Design e8" style={{ width: '20%', height: '100%', objectFit: 'cover' }} />
            </Card>
          </div>
        )}
      </Card>
    </div>
  );
};

export default PhotoAlbum;
