import Layout from '../components/layouts/article'
import { Container, Heading, Box,  } from '@chakra-ui/react'
import Section from '../components/section'


const Contact = () => (
  <Layout title='Contact'>
    <Container>
      <Heading as='h1' fontSize={50} mb={4}>
        Contact Us
      </Heading>
      {/* Contact Form + Information About Company...
      
      // In form,
      // 1) Company name, 2) Full name of contact person, 3)Phone(code, phone number...), 4) Email, 5)Country(drop-down), 6)city(drop-down), 7)Subject(MAIN), 8)Message(MAIN) || **Submit** button...
      //
      // In Contact Information,
      // Head Office, Thailand Branch, Links....
      //
      // in footer i'll have hyperlinks. */}

      <Section>
        {/* Here will be compnay information */}
        <Heading as='h3' fontSize={4} fontWeight={bold} mb={2}>Contact Information</Heading>
      </Section>

      <Section>
        {/* Here will come form */}
      </Section>

    </Container>
  </Layout>
)

export default Contact
