export default interface ITextArea{
    label?: string,
    className?: string
    value?: string | number,
    id?: string,
    rows?: number,
    onChange?: (e: any) => void,
    name?: string,
    placeholder?: string,
    
}