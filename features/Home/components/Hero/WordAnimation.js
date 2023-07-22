import { Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const WordAnimation = () => {
  const words = ['Cities,', 'Communities,', 'and', 'Homes.' ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]); // Initialize currentWord with the first word

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [words.length]);

  useEffect(() => {
    setCurrentWord(words[currentIndex]);
  }, [currentIndex, words]);

  return (
    <div>
      <Text display="flex" flexDir={{ base: "column", sm: "row" }} gap={2} fontSize={{ base: "30px", sm: "60px" }} fontWeight="600" textAlign="center">
        ...Building <Text color="gray.500" fontStyle="italic" fontWeight="450">{currentWord}</Text>
      </Text>
    </div>
  );
};

export default WordAnimation;