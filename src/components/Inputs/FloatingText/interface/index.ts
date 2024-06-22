export default interface IFloatingText {
    label?: string;
    type?: string;
    id?: string;
    placeholder?: string;
    value?: string | number | string[];
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    className?: string;
    required?: boolean;
    isInvalid?: boolean;
    feedbackText?: string;
}
