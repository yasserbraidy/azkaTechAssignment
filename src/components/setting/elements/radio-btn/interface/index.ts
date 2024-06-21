export default interface IRadio{
    id: string;
    value: string;
    name: string;
    defaultChecked: string;
    className?: string;
    labelClassName: string;
    children: React.ReactNode;
    imgComponent?: boolean;
    label?: string;
    onChange?: () => void;
}