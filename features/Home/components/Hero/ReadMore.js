import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { Box, Text } from '@chakra-ui/react';

const ReadMoreButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      display={{ base:"none", sm:"flex"}}
      justifyContent={{ base: 'center', sm: 'flex-end' }}
      marginTop={{ base: '0', sm: '70vh' }}
      marginRight="10px"
      marginBottom={{ base: '30px', sm: '0' }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'default',
          transition: 'transform 0.3s ease',
          transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
          color: 'white',
          backgroundColor: '#5eae31',
          borderRadius: '10px',
          padding: '8px',
          gap: 6,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span style={{ whiteSpace: 'nowrap', fontSize: '1.2em', fontWeight: '600' }}>
          Running Promos
        </span>
        <IconContext.Provider value={{ size: '1.2em', style: { marginRight: '5px' } }}>
            👉🏽
        </IconContext.Provider>
      </div>
    </Box>
  );
};

export default ReadMoreButton;
