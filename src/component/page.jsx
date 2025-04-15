import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
    padding: 2rem;
    width: 100%;
    margin: 0 auto;
    background-color: #f0fdf4;
    min-height: 100vh;
`;

const Header = styled.header`
    background: linear-gradient(135deg, #16a34a, #22c55e);
    padding: 3rem;
    border-radius: 15px;
    margin-bottom: 2rem;
    text-align: center;
`;

const Title = styled.h1`
    color: white;
    font-size: 3rem;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    font-weight: 700;
`;

const Card = styled.div`
    background-color: white;
    border-radius: 15px;
    padding: 2.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.h2`
    color: #166534;
    font-size: 1.5rem;
    margin: 1.5rem 0 1rem;
    font-weight: 600;
`;

const Text = styled.p`
    color: #166534;
    line-height: 1.7;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 1rem 0;
`;

const ListItem = styled.li`
    color: #166534;
    padding: 0.5rem 0;
    font-size: 1.1rem;
    position: relative;
    padding-left: 1.5rem;

    &:before {
        content: "•";
        color: #16a34a;
        font-size: 1.5rem;
        position: absolute;
        left: 0;
        top: 0;
    }
`;

const CodeBlock = styled.pre`
    background-color: #f0fdf4;
    padding: 1.5rem;
    border-radius: 8px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.9rem;
    color: #166534;
    margin: 1rem 0;
    overflow-x: auto;
`;

const Button = styled.button`
    background-color: #16a34a;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;

    &:hover {
        background-color: #15803d;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(22, 163, 74, 0.2);
    }
`;

const ComponentPage = () => {
    const handleClick = () => {
        alert('Learn more about Styled Components!');
    };

    return (
        <Container>
            <Header>
                <Title>Styled Components</Title>
            </Header>
            
            <Card>
                <Subtitle>What are Styled Components?</Subtitle>
                <Text>
                    Styled Components is a CSS-in-JS library that allows you to write actual CSS
                    in your JavaScript. It provides a way to create styled React components by
                    writing CSS directly in your component files.
                </Text>

                <Subtitle>Benefits</Subtitle>
                <List>
                    <ListItem>Automatic unique class names</ListItem>
                    <ListItem>Dynamic styling with props</ListItem>
                    <ListItem>No class name conflicts</ListItem>
                    <ListItem>Easy to maintain component-specific styles</ListItem>
                </List>

                <Subtitle>Example Usage</Subtitle>
                <CodeBlock>
{`import styled from 'styled-components';

const Button = styled.button\`
    background-color: #16a34a;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
\`;

const Component = () => {
    return <Button>Click Me</Button>;
};`}
                </CodeBlock>

                <Button onClick={handleClick}>
                    Learn More
                </Button>
            </Card>
        </Container>
    );
};

export default ComponentPage; 