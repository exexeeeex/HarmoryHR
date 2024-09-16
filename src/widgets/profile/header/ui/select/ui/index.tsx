import {
    Select,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@radix-ui/react-select';
import styles from './styles.module.scss';

export const ProfileHeaderSelect = (props: { placeholder: string }) => (
    <Select>
        <SelectTrigger className={`${styles.select} w-[180px]`}>
            <SelectValue placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectLabel>Test</SelectLabel>
            </SelectGroup>
        </SelectContent>
    </Select>
);
