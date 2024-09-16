'use client';
import Sign from '@/shared/types/auth';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChangeEvent, useEffect, useState } from 'react';
import { authPost, authService } from '@/entities/auth';
import styles from './styles.module.scss';

export const AuthenticationCard = () => {
    const router = useRouter();
    const [signModel, setSignModel] = useState<Sign>(Object);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignModel({ ...signModel, [name]: value });
    };

    const handleSubmit = async () => {
        const response = await authPost.SignIn(signModel);
        if (!response) return;
        router.push('/profile');
    };

    useEffect(() => {
        if (authService.getTokenByType('access')) router.push('/profile');
    }, []);

    return (
        <Card className={styles.card}>
            <CardHeader>
                <CardTitle className='text-2xl'>Авторизация</CardTitle>
                <CardDescription>Введите свою почту</CardDescription>
            </CardHeader>
            <CardContent className='grid gap-4'>
                <div className='grid gap-2'>
                    <Label htmlFor='email'>Почта</Label>
                    <Input
                        onChange={handleInputChange}
                        name='email'
                        id='email'
                        type='email'
                        placeholder='example@example.com'
                        required
                    />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='password'>Пароль</Label>
                    <Input
                        onChange={handleInputChange}
                        name='password'
                        id='password'
                        type='password'
                        required
                    />
                </div>
            </CardContent>
            <CardFooter>
                <Button
                    onClick={handleSubmit}
                    className='w-full bg-zinc-800 text-cyan-100 text-xl'
                >
                    Войти
                </Button>
            </CardFooter>
        </Card>
    );
};
