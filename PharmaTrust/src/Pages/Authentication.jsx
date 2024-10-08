import React from 'react';
import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Authentication = () => {
  const location = useLocation();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      bg="gray.50"
    >
      <VStack
        spacing={4}
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
        w="full"
        maxW="md"
      >
        <Heading>PharmaTrust</Heading>
        <Text>Secure Your Medical Data with Trust</Text>

        <Outlet />

        <Box pt={4}>
          <Text>
            {location.pathname === '/signin' ? (
              <>
                Don’t have an account?{' '}
                <Link to="/signup" style={{ color: 'teal' }}>
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Link to="/signin" style={{ color: 'teal' }}>
                  Sign In
                </Link>
              </>
            )}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Authentication;
