import React from 'react';
import { useGetTodosQuery } from '../../services/api';
import Todo from './Todo';

const TodoList: React.FC = () => {
    const { data: todos } = useGetTodosQuery();
    return (
        <>
            {todos?.map((todo) => (
                <Todo todo={todo} />
            ))}
        </>
    );
};
export default TodoList;
