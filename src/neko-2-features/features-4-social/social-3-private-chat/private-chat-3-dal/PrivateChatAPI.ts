import {instance} from "../../../../base-url";

export interface IChat {
    _id: string;
    user1Id: string;
    user2Id: string;

    messages: string[];
}

export interface IAddedPrivateChatData {
    addedPrivateChat: IChat;
    success: boolean;

    error: string;
}

export const PrivateChatAPI = {
    startChat: async (token: string, userId: string) => {
        const response = await instance.post<IAddedPrivateChatData>('/private-chats', {token, userId});
        return response.data;
    },

};
