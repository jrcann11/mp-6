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

function AboutPageContent() {
    const searchParams = useSearchParams();
    const [userInfo, setUserInfo] = useState<{
        name: string | null;
        email: string | null;
        picture: string | null;
    }>({ name: null, email: null, picture: null });

    useEffect(() => {
        const name = searchParams.get('name');
        const email = searchParams.get('email');
        const picture = searchParams.get('picture');

        if (name && email && picture) {
            setUserInfo({ name, email, picture });
        }
    }, [searchParams]);

    if (!userInfo.name || !userInfo.email || !userInfo.picture) {
        return (
            <ProfileWrapper>
                <p>No user info found. Please sign in.</p>
            </ProfileWrapper>
        );
    }

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

export default function AboutPage() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <AboutPageContent />
        </Suspense>
    );
}