import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type User = {
    email: string;
};

export type Todo = {
    id?: number;
    title: string;
    description: string;
    completed: boolean;
    owner: User;
};

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1' }),
    tagTypes: ['todos'],
    endpoints: (builder) => ({
        getTodos: builder.query<Todo[], void>({
            query: () => `todos`,
            providesTags: ['todos'],
        }),
        addTodo: builder.mutation<Todo, Partial<Todo>>({
            query: (body) => ({
                url: `todos`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['todos'],
        }),
        updateTodo: builder.mutation<Todo, Partial<Todo> & Pick<Todo, 'id'>>({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({ id, ...patch }) => ({
                url: `todos/${id}`,
                method: 'PATCH',
                body: patch,
            }),
            invalidatesTags: ['todos'],
        }),
    }),
});

export const { useGetTodosQuery, useUpdateTodoMutation } = api;
