export default interface IForm{
    noValidate?: boolean,
    validated?: boolean,
    onSubmit?: React.FormEventHandler<HTMLFormElement>,
    showValidationAlert?: boolean,
    validationErrorMessage?: string,
    children: React.ReactNode,
}