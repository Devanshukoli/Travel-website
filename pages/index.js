import NextLink from "next/link";
import Layout from '../components/layouts/article'
import { useColorModeValue, Container, Box } from "@chakra-ui/react";

const Home = () => (
  <Layout>
    <Container>
      <Box
      borderRadius='lg'
      mb={6}
      p={3}
      textAlign='center'
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;
      </Box>
    </Container>
  </Layout>
)

export default Home
