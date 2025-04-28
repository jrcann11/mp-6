'use client';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderContainer = styled.header`
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
`;

const TitleLink = styled(Link)`
    color: black;
    font-size: 2.1rem;
    font-weight: 600;
    padding: 1rem;
    text-decoration: none;

    &:hover {
        color: grey;
    }
`;

export default function Header() {
    return (
        <HeaderContainer>
            <TitleLink href="/">CS391 OAuth</TitleLink>
        </HeaderContainer>
    );
}