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
    endpoints: (builder) => ({
        getTodos: builder.query<Todo[], void>({
            query: () => `todos`,
        }),
    }),
});

export const { useGetTodosQuery } = api;
