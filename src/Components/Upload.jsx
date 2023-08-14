import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

function Upload() {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={16}>
      <VStack color={'purple'} h={'2xs'} textAlign={'center'} justifyContent={'center'}>
        <Heading>Upload Your videos here</Heading>
        <Text fontSize={'2xl'} fontFamily={'cursive'} textDecoration={'underline'} >Let the world see your talent</Text>
      </VStack>
      <VStack color={'purple'} h={'md'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />
        <form action="">
          <HStack>
            <Input
              required
              type="file"
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  width: 'calc(100% + 36px)',
                  height: '100%',
                  marginLeft: '-18px',
                  backgroundColor: 'white',
                  color: 'purple',
                  cursor: 'pointer',
                },
              }}
            />
            <Button colorScheme="purple" type="submit">
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
}

export default Upload;
