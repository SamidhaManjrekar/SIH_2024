import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VStack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    // Placeholder for actual authentication
    if (email === 'user@pharmatrust.com' && password === 'password') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <VStack as="form" spacing={4} w="full" onSubmit={handleSignIn}>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <Button colorScheme="teal" type="submit" width="full">
        Sign In
      </Button>
    </VStack>
  );
};

export default SignIn;
