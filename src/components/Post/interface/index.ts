import IPost from "../../../services/entities/IPost";

export default interface IPostComponent{
    userFullName?: string,
    username?: string,
    post?: IPost,
    count?: number,
}