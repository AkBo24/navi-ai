import { Box, Checkbox, Typography } from '@mui/material';
import type { Todo } from '../../services/api';

const Todo: React.FC<{ todo: Todo }> = ({ todo }) => {
    return (
        <Box
            sx={{ backgroundColor: 'wheat' }}
            padding={1}
            borderRadius={2}
            display='flex'>
            <Checkbox checked={todo.completed} />
            <Box>
                <Typography variant='h5'>{todo.title}</Typography>
                <Typography variant='body2'>{todo.description}</Typography>
            </Box>
        </Box>
    );
};

export default Todo;
