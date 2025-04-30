'use client';
import { Suspense, useState, useEffect } from 'react';
import UserInfo from "@/app/components/UserInfo";
import { useSearchParams } from 'next/navigation';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`;

// Core component that renders user profile info based on URL search params
function AboutPageContent() {
    const searchParams = useSearchParams();

    // State to hold user info retrieved from URL parameters
    const [userInfo, setUserInfo] = useState<{
        name: string | null;
        email: string | null;
        picture: string | null;
    }>({ name: null, email: null, picture: null });

    // Effect to extract and store user info when URL params change
    useEffect(() => {
        const name = searchParams.get('name');
        const email = searchParams.get('email');
        const picture = searchParams.get('picture');

        // Update state only if all required params are available
        if (name && email && picture) {
            setUserInfo({ name, email, picture });
        }
    }, [searchParams]);

    // If user info is missing, display a message
    if (!userInfo.name || !userInfo.email || !userInfo.picture) {
        return (
            <ProfileWrapper>
                <p>No user info found. Please sign in.</p>
            </ProfileWrapper>
        );
    }

    // Derive a username from the email prefix
    const username = userInfo.email.split('@')[0];

    return (
        <UserInfo
            name={userInfo.name}
            email={userInfo.email}
            picture={userInfo.picture}
            username={username}
        />
    );
}

// Wrap the page content in a Suspense boundary to handle async rendering
export default function AboutPage() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <AboutPageContent />
        </Suspense>
    );
}