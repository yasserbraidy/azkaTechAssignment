import ID from "../Identity";

export default interface IComment extends ID{
    postId?: number,
    name?: string,
    email?: string,
    body?: string,
}