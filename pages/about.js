import Layout from "../components/layouts/article";
import { Container, Heading } from "@chakra-ui/react";
import Section from "../components/section";

const About = () => {
    <Layout title="About">
        <Container>
            <Heading as="h1" fontSize={100} mb={5}>
                About
            </Heading>

            <Section>
            {/** Here will come background iamges... */}
            </Section>

            <Section>
                
            </Section>

        </Container>
    </Layout>
}

export default About