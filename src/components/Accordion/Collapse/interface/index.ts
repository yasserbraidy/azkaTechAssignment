import INavItem from '../../Nav/interface';

export default interface ICollapse{
    eventKey: string;
    items: Array<INavItem>;
    location: any;
}