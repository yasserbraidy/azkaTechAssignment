export default interface ISweetAlert{
    children: React.ReactNode,
    title: string,
    text?: string,
    icon?: "info" | 'question' | 'warning' | 'error' | 'success',
    showCancelButton?: boolean,
    confirmButtonText?: string,
    showDenyButton?: boolean,
    denyButtonText?: string,
    backdrop?: string,
    footer?: string,

    showConfirmAlert?: boolean,
    showDenyAlert?: boolean,

    confirmedTitle?: string,
    confirmedText?: string,
    confirmedIcon?: "info" | 'question' | 'warning' | 'error' | 'success',
    
    deniedTitle?: string,
    deniedText?: string,
    deniedIcon?: "info" | 'question' | 'warning' | 'error' | 'success',

    onConfirm?: () => void;
    onDeny?: () => void;
}