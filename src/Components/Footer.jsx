import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

function Footer() {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={16} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack
          alignItems={'stretch'}
          w={'full'}
          px={4}
          marginBottom={['6', 'auto']}
        >
          <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
            Suscribe to get updates
          </Heading>

          <HStack borderBottom={'2px solid white'} py={2}>
            <Input
              placeholder="Enter Your Email"
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />

            <Button
              p={0}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          justifyContent={'space-between'}
          marginBottom={['6', 'auto']}
        >
          <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
            Video Hub
          </Heading>
          <Text>All rights reserved</Text>
          <p>Created by - @Keshav_k_sharma</p>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="purple">
            <a
              target={'blank'}
              href="https://www.linkedin.com/in/keshav-kartik-sharma-b7b928238/"
            >
              LinkedIn
            </a>
          </Button>
          <Button variant={'link'} colorScheme="purple">
            <a target={'blank'} href="https://www.instagram.com/keshavk_4762/">
              Instagram
            </a>
          </Button>
          <Button variant={'link'} colorScheme="purple">
            <a target={'blank'} href="https://github.com/Keshav4762">
              GitHub
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer;
