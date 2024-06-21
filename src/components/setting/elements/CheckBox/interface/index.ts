export default interface ICheckBox{
    className?: string;
    value: string;
    type?: 'switch';
    btnName: string;
    id: string;
    defaultChecked: string[];
    labelClassName?: string;
    children: React.ReactNode;
    imgComponent?: boolean;
    label?: string;
}