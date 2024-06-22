export default interface ISelectInput{
    name?: string;
    className?: string;
    value?: any;
    onChange?: any;
    id?: string;
    label?: string;
    options?: Array<{value: string | number, label: string}>
    disabled?: boolean
}