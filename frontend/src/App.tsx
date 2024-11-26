import { Container, Typography } from '@mui/material';
import { useGetTodosQuery } from './services/api';
import TodoList from './components/Todo/TodoList';

function App() {
    const { data: todos } = useGetTodosQuery();
    console.log(todos);

    return (
        <Container maxWidth='sm'>
            <Typography variant='h3' textAlign='center'>
                Todos
            </Typography>
            <TodoList />
        </Container>
    );
}

export default App;
