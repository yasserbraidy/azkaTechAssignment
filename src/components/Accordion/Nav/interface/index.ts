export default interface INavItem{
    title: string,
    link: string,
    location?: any,
    icon?: React.ReactElement,
    overlayTriggerTitle: string,
    tooltip: string,
    requiredPermissions: Array<string>
}