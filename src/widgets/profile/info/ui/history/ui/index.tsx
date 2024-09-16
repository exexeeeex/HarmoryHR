import { SelectInput } from '@/shared/ui/inputs/select';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import styles from './styles.module.scss';

import time from './time.svg';

const TableRows: any[] = [
    {
        id: 1,
        date: '23/05/2024',
        description: 'Accrual for 23/05/2024 to 20/11/2024',
        useddays: '',
        earneddays: '3.00',
        balance: '3.00',
    },
    {
        id: 2,
        date: '23/05/2024',
        description: 'Accrual for 23/05/2024 to 20/11/2024',
        useddays: '-6',
        earneddays: '',
        balance: '3.00',
    },
];

export const ProfileInfoHistory = () => {
    return (
        <main
            style={{ marginTop: '20px', gap: '20px' }}
            className='w-full flex flex-col items-start'
        >
            <div style={{ gap: '8px' }} className='flex items-center'>
                <img src={time.src} alt='time' />
                <p>History</p>
            </div>
            <div className='w-full flex items-center justify-between'>
                <div style={{ gap: '16px' }} className='flex items-center'>
                    <SelectInput width={256} />
                    <SelectInput width={96} />
                </div>
                <SelectInput width={176} placeholder='Balance History' />
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Used Days (-)</TableHead>
                        <TableHead>Earned Days (+)</TableHead>
                        <TableHead>Balance</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {TableRows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell>{row.useddays}</TableCell>
                            <TableCell>{row.earneddays}</TableCell>
                            <TableCell>{row.balance}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </main>
    );
};
