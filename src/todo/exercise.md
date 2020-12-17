# Exercise: todo
In this exercise you will implement a "todo" React application, comprised of components with styling for displaying a form (to create new todos) and rendering a list of todos and their details.

## Part 1: Styling
In this part of the exercise, a couple of components are to be created with proper styling applied.

### TodoForm
The _TodoForm_ component (in `TodoForm.tsx`) allows the user to enter a title and create a new todo.

__Inline styling__ is to be used, with the following CSS properties:

```javascript
{
  width: '100%',
  backgroundColor: '#FFF',
  padding: 16,
  fontSize: 24,
  fontStyle: 'italic',
  fontWeight: 300,
  border: 'none'
}
```

The component's markup:

```html
<form>
  <input
    placeholder="What do you need to do?"
  />
</form>
```

Apply the styling to the _input_ element.

(Render _TodoForm_ in _App_)

### Todo
The _Todo_ component (in `Todo.tsx`) renders a todo object.

> See `todos.json` for the structure of a todo object.

Import styled-components:

```javascript
import styled from 'styled-components';
```

_Todo_ accepts the following (required) props:

*   id: `number`
*   title: `string`
*   completed: `boolean`

> Hint: For props typing, use the `TodoType` from `types.ts`.

It returns the following markup:

```html
<Container>
  <div>
    <Checkbox
      id={`${id}`}
      type="checkbox"
    />
    <Label
      htmlFor={`${id}`}
    >
      Todo title goes here...
    </Label>
  </div>
  <Button />
</Container>
```

Notice that the markup seemingly contains other React components; these are so-called _styled components_, which render just as regular components.

Create the following styled components:

*   _Container_: a `div` styled with:

    ```css
    padding: 8px 16px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    ```

*   _Checkbox_: an `input` styled with:

    ```css
    appearance: none;
    ```

*   _Label_: a `label` styled with:

    ```css
    background-position: center left;
    background-repeat: no-repeat;
    padding: 15px 15px 15px 60px;
    display: inline-block;
    ```

    In addition, add the CSS properties below; their values should adapt based on the `completed` prop passed to _Todo_:

    ```css
    background-image: url(/* checked if completed, otherwise unchecked; see Todo.snippet */);
    color: /* '#d9d9d9' if completed, otherwise 'initial' */;
    text-decoration: /* 'line-through' if completed, otherwise 'none' */
    ```

    > See [Adapting based on props](https://styled-components.com/docs/basics#adapting-based-on-props) in the styled-components documentation.

    The _Label_ styled component must be typed with any prop(s) it receives. 
    
    To add props typing for a typical styled component:

    ```javascript
    const MyStyledDiv = styled.div<{
      // myStringProp: string;
    }>`
      /* CSS properties... */
    `
    ```

*   _Button_: a `button` styled with:

    ```css
    font-size: 22px;
    color: #cc9a9a;
    
    &:after {
      content: /* value passed as a prop, e.g. 'x', goes here */;
    }
    
    &:hover {
      color: #af5b5e;
    }
    ```

    > Note: The _Button_ styled component, just like _Label_, will also have props typing.

Render the list of todos (`initialTodos` in _App_) below _TodoForm_. 

### Optional
Currently, the todo title is passed via `title` prop to _Todo_.

Another way to pass the title to _Todo_ is as follows:

```javascript
<Todo 
  key={todo.id}>
  {...todo}
>
  {todo.title}
</Todo>
```

I.e., the todo title is passed as "content" to _Todo_ and represented within the component via a `children` prop. This prop implicitly gets created with whatever is passed to a component as "content".

_Todo_ would now look as follows:

```javascript
const Todo = ({ id, completed, children }: TodoProps) => {
  // the todo title is now contained in the 'children' prop.
}
```

Remove the `title: string` prop and add a `children`: prop (of type `React.ReactNode`); ensure that the todo title is displayed.

__Bonus__: Instead of adding an explicit `children` prop to `TodoProps`, you may utilize the generic `React.PropsWithChildren` type instead, which implicitly includes the `children` prop:

```javascript
type TodoProps = PropsWithChildren<{
  // Todo props...
}>
```

## Part 2: Component state and event handling
In this part, the list of todos will be managed as component state (in _App_).

### Creating a todo
In order to create a todo with a user-entered title, the following must be implemented:

*   Add a `handleSubmit` event handler that is bound to the `onSubmit` form event.

    > To prevent default form submission, call `event.preventDefault()`; ensure that the event handler is properly typed.

    Verify that the event handler is called upon submitting the form (pressing Enter) by logging the title.

*   In order to support rerendering the application when a new todo is added, the list of todos must be managed as component state in _App_.

    Ensure that todos are now handled by the `useState` hook (passing the `initialTodos` as initial state), and that the hook's typing matches (an array of `TodoType`). 

    > Note: You'll now render the list of todos managed by `useState` instead of the previous `initialTodos`!

*   Create a callback function `createTodo` in the _App_ component:

    ```javascript
    const createTodo = (title: string) => {
      // update the state (= list of todos) by adding a new todo object - with the passed title - first in the list.
      //
      // Use Date.now() as the value for the 'id' property.
      //
      // Important! You must update the state (= list of todos) as a completely NEW list of todos, containing the new todo object as the first element followed by all the elements of the current todos list.
      //
      // Hint: Use the spread - ... - operator!
    }
    ```

    > See [this link](https://www.samanthaming.com/tidbits/14-combine-multiple-arrays-using-spread/) for how to create/combine arrays using the spread operator.
    
    Pass the `createTodo` callback function as a prop to _TodoForm_.

    Add props typing to _TodoForm_; the callback prop has the following type: `(title: string) => void`.

    Invoke the callback function upon form submission; verify that a new todo is added (first) to the list.

### Deleting a todo

*   Create a callback function `deleteTodo` in the _App_ component.

    This function should receive a todo id, remove the corresponding todo object and update the list of todos.

    > Hint: Use [array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to remove a todo and get a new list as a result.

*   Pass this function as a prop to the _Todo_ component (and update the component's props typing).

    > Hint: "Extend" `TodoType` by __intersecting__ it with the type `{ deleteTodo: (todoId: number) => void }`.

*   Bind an event handler function to the `onClick` event on the _Button_ styled component; the event handler should invoke
    the `deleteTodo` callback with the todo's id.

### Optional: Update a todo

*   Create a callback function `updateTodo` in the _App_ component.

    This function should receive a todo id, locate the corresponding todo object and flip the `completed` flag of that todo.

    > Hint: Use [array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to iterate over the todos, update the target todo object and get a new list as a result.

*   Pass this function as a prop to the _Todo_ component (and update the component's props typing).

*   Bind an event handler function to the `onClick` event on the _Checkbox_ styled component; the event handler should 
    invoke the `updateTodo` callback with the todo's id.

### Extra: glitz
A library called [glitz](https://github.com/frenic/glitz) is used within Avensia for styling components (very similar to the styled-components library).

Peruse glitz and determine what changes would be required to migrate from styled-components and accomplish the same styling. 