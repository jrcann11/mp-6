'use client';

import styled from 'styled-components';

interface UserInfoProps {
    name: string;
    email: string;
    picture: string;
    username: string;
}

const ProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 80px);
`;

const ProfileContainer = styled.div`
    background-color: white;
    color: black;
    border: 2px solid black;
    text-align: center;
    padding: 2rem;
    width: 100%;
    max-width: 22rem;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
`;

const ProfilePicture = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
`;

const InfoItem = styled.p`
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
`;

const LastItem = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  color: gray;
`;

export default function UserInfo({ name, email, picture, username }: UserInfoProps) {
    return (
        <ProfileWrapper>
            <ProfileContainer>
                <Title>Your Information:</Title>
                <ProfilePicture src={picture} alt="Profile Picture" />
                <InfoItem><strong>Name:</strong> {name}</InfoItem>
                <InfoItem><strong>Username:</strong> {username}</InfoItem>
                <InfoItem><strong>Email:</strong> {email}</InfoItem>
                <LastItem>Signed in with Google!</LastItem>
            </ProfileContainer>
        </ProfileWrapper>
    );
}