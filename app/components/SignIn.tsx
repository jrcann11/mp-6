'use client';
import styled from 'styled-components';
import Link from 'next/link';

const SignInWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 80px);
`;

const SignInContainer = styled.div`
    background-color: white;
    color: black;
    text-align: center;
    padding: 2rem;
    width: 100%;
    max-width: 20rem;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
    margin-bottom: 1rem;
    font-size: 1.8rem;
`;

const Paragraph = styled.p`
    margin-bottom: 1rem;
    font-size: 1.2rem;
`;

const SignInButton = styled(Link)`
    display: inline-block;
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    background-color: darkgreen;
    color: white;
    font-weight: bold;
    text-decoration: none;
    border-radius: 8px;

    &:hover {
        background-color: green;
    }
`;

export default function SignIn() {
    return (
        <SignInWrapper>
            <SignInContainer>
                <Title>My OAuth App</Title>
                <Paragraph>Sign in below with Google:</Paragraph>
                <SignInButton href="/auth/login">Sign in with Google</SignInButton>
            </SignInContainer>
        </SignInWrapper>
    );
}