import ID from "../Identity";

export default interface IComment extends ID{
    name?: string,
    email?: string,
    body?: string,
}