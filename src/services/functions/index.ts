import Api from "../api";
import IApiResponse from "../api/response";
import { BASE_URL, TOKEN,LOGIN_API } from "../api/utils";
import * as endpoints from "../api/utils";

const api = new Api(BASE_URL, TOKEN);



//SocialMedia
// export async function CSocialMedia(body: Partial<ISocialMedia>): Promise<IApiResponse> {
//     const response = await api.post( endpoints.CREATE_SOCIAL_MEDIA, body);
//     return response;
// }
// export async function USocialMedia(body: Partial<ISocialMedia>, id: string | number): Promise<IApiResponse> {
//     const response = await api.patch( endpoints.EDIT_SOCIAL_MEDIA(id), body);
//     return response;
// }
// export async function GASocialMedias(): Promise<IApiResponse>  {
//     const response = await api.get(endpoints.GET_ALL_SOCIAL_MEDIAS);
//     return response;
// }
// export async function GSocialMedia(id: string | number): Promise<IApiResponse>  {
//     const response = await api.get(endpoints.GET_SOCIAL_MEDIA(id));
//     return response;
// }
// export async function DSocialMedia(id: string | number): Promise<IApiResponse>  {
//     const response = await api.del(endpoints.DELETE_SOCIAL_MEDIA(id));
//     return response;
// }

//auth
export async function login(username: string, password: string) {
    // Creating a new instance of Api without passing the token
    const apiWithoutToken = new Api(LOGIN_API, '');
    
    const response = await apiWithoutToken.post(endpoints.LOGIN, { username, password });
    return response;
}


