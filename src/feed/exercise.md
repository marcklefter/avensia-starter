# Exercise: feed
In this exercise you will implement a number of component to render a simple "feed".

## Tasks
Implement the components listed below. For each component, create a _Props_ type.

*   `App.tsx`

    Should render a _CardList_ component, passing a list of items as a prop.

    (Use the _Item_ type from `types.ts`)

*   `CardList.tsx`

    Should accept a list of items as a prop and render corresponding _Card_ components.

    (Use the _Item_ type from `types.ts`)

    Ensure that the list is rendered without any warnings! [Read about rendering lists](https://reactjs.org/docs/lists-and-keys.html) (up until the section called _Keys_).

    > Hint: Use the array index of an item as the value for the _key_ prop.

*   `Card.tsx`

    Return the following markup from the _Card_ component:

    ```html
    <div className="Card">
      <p className="Card__title">{title.toUpperCase()}</p>
      <div><img className="Card__image" src={image} alt="" /></div>
    </div>
    ```

    This component renders the _title_ prop with uppercase letters.

*   OPTIONAL:

    Currently, a _Card_ is rendered with a predetermined width (see `style.css`). 

    Make the _Card_ component more flexible by passing an additional `size` prop with the following (string) values: __small__, __medium__ and __large__ (with __medium__ being the current width, 350px). 
    
    > Hint: Create a type _Size_ which is the union of the possible values.

    The component should __not__ contain logic for determining the actual width values, these must be set in the CSS file. The component should combine the _size_ prop with the CSS classes contained in `style.css` in a generic fashion. 

    If the _size_ prop is not provided the component should default to __medium__. 
