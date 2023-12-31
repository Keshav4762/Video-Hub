import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={16} marginBottom={10}>
        <form>
            <VStack alignItems={'stretch'} spacing={8} w={['full','96']} m={'auto'} my={16}>
                <Heading alignSelf={'center'} >Video Hub</Heading>
                <Avatar alignSelf={'center'} boxSize={32} />
                <Input placeholder='Enter Name' type='text' required focusBorderColor={'purple.500'} />
                <Input placeholder='Enter Email' type='email' required focusBorderColor={'purple.500'} />
                <Input placeholder='Enter Password' type='password' required focusBorderColor={'purple.500'} />
                
                <Button colorScheme='purple' type='submit'>SignUp</Button>

                <Text textAlign={'right'}>Already User? {'  '}
                <Button colorScheme='purple' variant={'link'} alignSelf={'flex-end'} >
                    <Link to={'/login'}>Log In</Link>
                </Button>
                {" "}</Text>

            </VStack>
        </form>
    </Container>
  )
}

export default Signup