import NextLink from "next/link";
import Layout from '../components/layouts/article'
import {
  useColorModeValue,
  Container,
  Box,
  Heading,
  Link,
  SimpleGrid,
  Button,
  List,
  ListItem,
  chakra
} from "@chakra-ui/react";
import { ChevronRightIcon, EmailIcon } from "@chakra-ui/icons";
import Image from 'next/image'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection } from '../components/bio'
import { IoLogTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Navbar from '../components/navbar'
import About from './about'


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Navbar />
    <Container>
      <Box
        borderRadius='lg'
        mb={6}
        p={3}
        textAlign='center'
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an indie app developer based in India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" textAlign='center'>
            Devanshu Koli
          </Heading>
          <p>Digital Craftsman ( Swimmer / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/devanshukoli.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Work
        </Heading>
        <Paragraph>
          Devanshu is a freelance and a full-stack developer based in India with a passion for building digital services/stuff he wants. When not online, he loves going to swim, And exploring neighbourhood. Currently, He is working for travel compnay. And building website for them.
        </Paragraph>
        <Box aling='center' my={4}>
          <Button
            as={NextLink}
            href='/works'
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My Portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
          Bio
        </Heading>
        <BioSection></BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as='h3' variant="section-title">
          I ❤️
        </Heading>
        <Paragraph>
          Swimming,{' '}
          <Link href='https://open.spotify.com/' target='_blank'>
            Music
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as='h3' variant='section-title'>
          On the Web
        </Heading>
        <List>
          <ListItem>
            <Link href='https://github.com/Devanshukoli' target="_blank">
              <Button
                variant='ghost'
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Devanshukoli
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='https://instagram.com/Devanshukoli' target='_blank'>
              <Button
                variant='ghost'
                colorScheme='teal'
                leftIcon={<IoLogoInstagram />}
              >
                @Devanshukoli
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout >
)

export default Home
