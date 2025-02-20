import React from 'react';
import { TodoIcon } from './TodoIcon';

function DeleteIcon( {onDelete} ) {
    return (
        <TodoIcon
        type= 'type'
        color= 'gray'
        onClick={onDelete}
        />
    );
}

export { DeleteIcon }