import { Box, Container, Heading, Image, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

function Home() {
  return (
    <Box  >
      <MyCarousel />
      <Container maxW={'container.xl'} minH={['70vh','100vh']} p={16}>
        
        <Heading
          textTransform={'uppercase'}
          py={2}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack h={'full'} p={4} alignItems={'center'} direction={['column','row']} >
            <Img src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
            <Text letterSpacing={'widest'} lineHeight={'200%'} p={['4', '16']} textAlign={'center'} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eveniet corporis dolore accusantium, aperiam vel quasi maxime odio, provident sit debitis quidem esse amet aliquid, dolorem vitae magni! Vel nihil totam debitis nulla, iste voluptatum libero, quo tenetur dolores quos impedit velit odio excepturi fuga quaerat quam corrupti. Mollitia eius vero minus autem officia temporibus aliquid quo hic, fugit consequuntur quae debitis deleniti excepturi dignissimos aliquam cum magni ipsam minima molestiae nobis laudantium quaerat? Quidem impedit animi saepe esse ab!</Text>
        </Stack>
      </Container>
    </Box>
  );
}

const MyCarousel = () => (
  <Carousel autoPlay infiniteLoop interval={2000} showStatus={false} showThumbs={false}>
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming in console
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night Life in Meta
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
