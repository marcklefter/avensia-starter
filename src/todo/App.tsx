import { Todo } from './Todo';

import {
  TodoForm
} from './TodoForm';

import { TodoType } from './types';

const initialTodos = require('./todos.json');

const appStyles = {
  width: 'calc(100% / 3)',
  margin: '150px auto auto'
};

// ...

export const App = () => {
  return (
    <div style={appStyles}>
      <TodoForm />
      {initialTodos.map((todo: TodoType) => (
        <Todo
          key={todo.id}

          {...todo}
        />
      ))}
    </div>
  )
}