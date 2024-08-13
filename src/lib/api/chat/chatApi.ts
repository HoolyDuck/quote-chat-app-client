import { Chat } from "@/common/types/chat/chat.type";
import { CreateChatDto } from "@/common/types/chat/create-chat.dto";
import { GetChatsDto } from "@/common/types/chat/get-chats.dto";
import { apiSlice } from "../apiSlice";
import { GetChatsParams } from "@/common/types/chat/get-chats-params.type";

const chatApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query<GetChatsDto, GetChatsParams | void>({
      query: (params) => {
        if (!params || !params.name) {
          return "/chat";
        }
        return {
          url: "/chat",
          params,
        };
      },
      providesTags: ["Chats"],
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
      invalidatesTags: ["Chats"],
    }),
    updateChat: builder.mutation<Chat, { id: string } & CreateChatDto>({
      query: ({ id, ...body }) => ({
        url: `/chat/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Chats"],
    }),
    deleteChat: builder.mutation<void, string>({
      query: (id) => ({
        url: `/chat/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Chats"],
    }),
  }),
});

export const {
  useGetChatsQuery,
  useLazyGetChatsQuery,
  useGetChatQuery,
  useCreateChatMutation,
  useUpdateChatMutation,
  useDeleteChatMutation,
} = chatApi;
export { chatApi };
