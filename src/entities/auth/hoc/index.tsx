'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import React from 'react';

const withAuth = (WrappedComponent: any) => {
    return (props: any) => {
        const router = useRouter();
        useEffect(() => {
            const token = localStorage.getItem('_tokens');
            if (!token) router.push('/');
        }, []);

        return <WrappedComponent {...props} />;
    };
};
export default { auth: withAuth };
