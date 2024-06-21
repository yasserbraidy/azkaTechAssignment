export default interface IAlert{
    header?: string,
    type?: string,
    message: string,
    onClose?: () => void,
    show?: boolean,
    timer?: number,
    autoHide?: boolean,
}