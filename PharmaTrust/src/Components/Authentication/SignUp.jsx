import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VStack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // Placeholder for actual sign-up logic
    if (email && password) {
      navigate('/dashboard');
    } else {
      alert('Please fill out all fields!');
    }
  };

  return (
    <VStack as="form" spacing={4} w="full" onSubmit={handleSignUp}>
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
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <Button colorScheme="teal" type="submit" width="full">
        Sign Up
      </Button>
    </VStack>
  );
};

export default SignUp;
