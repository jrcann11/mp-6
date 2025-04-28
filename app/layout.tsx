"use client";
import React from "react";
import Header from "@/app/components/Header";
import styled from "styled-components";

const BodyContainer = styled.body`
    margin: 0;
    padding: 0;
    background-color: #d4edda;
`;

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <BodyContainer>
            <Header />
            {children}
        </BodyContainer>
        </html>
    );
}
