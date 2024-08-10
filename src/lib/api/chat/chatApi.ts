import { Chat } from "@/common/types/chat/chat.type";
import { CreateChatDto } from "@/common/types/chat/create-chat.dto";
import { GetChatsDto } from "@/common/types/chat/get-chats.dto";
import { apiSlice } from "../apiSlice";

const chatApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query<GetChatsDto, void>({
      query: () => "/chat",
    }),
    getChat: builder.query<Chat, string>({
      query: (id) => `/chat/${id}`,
    }),
    createChat: builder.mutation<Chat, CreateChatDto>({
      query: (body) => ({
        url: "/chat",
        method: "POST",
        body,
      }),
    }),
    updateChat: builder.mutation<Chat, { id: string } & CreateChatDto>({
      query: ({ id, ...body }) => ({
        url: `/chat/${id}`,
        method: "PUT",
        body,
      }),
    }),
    deleteChat: builder.mutation<void, string>({
      query: (id) => ({
        url: `/chat/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetChatsQuery,
  useGetChatQuery,
  useCreateChatMutation,
  useUpdateChatMutation,
  useDeleteChatMutation,
} = chatApi;
export { chatApi };
