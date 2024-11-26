import { Container, Typography } from '@mui/material';
import TodoList from './components/Todo/TodoList';

function App() {
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
