import React from 'react';
import { IconContext } from 'react-icons';
import { Box } from '@chakra-ui/react';

const ReadMoreButton = () => {
  return (
    <Box
      display={{ base: "none", sm: "flex" }}
      justifyContent={{ base: 'center', sm: 'flex-end' }}
      marginTop={{ base: '0', sm: '80vh' }}
      marginRight="10px"
      marginBottom={{ base: '30px', sm: '0' }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'default',
          color: 'white',
          backgroundColor: '#5eae31',
          borderRadius: '10px',
          padding: '8px',
          gap: 6,
          position: 'relative',
          animation: 'pendulum 2s infinite',
        }}
      >
        <span style={{ whiteSpace: 'nowrap', fontSize: '1.2em', fontWeight: '600' }}>
          Running Promos
        </span>
        <IconContext.Provider value={{ size: '1.2em', style: { marginRight: '5px' } }}>
          👉🏽
        </IconContext.Provider>
      </div>
      <style jsx>{`
        @keyframes pendulum {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </Box>
  );
};

export default ReadMoreButton;
