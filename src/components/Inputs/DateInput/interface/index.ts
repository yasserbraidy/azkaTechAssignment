export default interface IDateInput{
    value?: string;
    name?: string;
    id?: string;
    required?: boolean;
    onChange?: (e?: any) => void;
    feedbackText?: string;
    label?: string;
    isInvalid?: boolean;
}