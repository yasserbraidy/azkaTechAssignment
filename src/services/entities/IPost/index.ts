import ID from "../Identity";

export default interface IPost extends ID{
    userId?: number,
    title?: string,
    body?: string,
    date?: string,
}