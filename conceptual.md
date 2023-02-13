### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  React is a front-end framework developed by Facebook. It makes it easy to make resusable components that encapsulate logic and HTML into a class. It can be used to build moduler applications

- What is Babel?
  Babel is a JavaScript compliler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

- What is JSX?
  JSX is a syntax extension to JavaScript that produces React elements.

- How is a Component created in React?
  A component is created by writing a function and exporting that function. The page callingk the component must import the component before using it.

- What are some difference between state and props?
  Props are pieces of data (or properties) that are intending for use in the component but never changes. They are passed from the parent. State is a variable that is created for data the changes and is called X. You change the data with a setX function.

- What does "downward data flow" refer to in React?
  Downward data flow is a technique that allows a parent to pass down data to a child. This process is only one-way, so a child can never pass data up to a parent. That is called bi-directional binding.

- What is a controlled component?
  A controlled component is an input form element where the value is controlled by React. It takes its current value through 'props' and notifies changes through callbacks.

- What is an uncontrolled component?
  An uncontrolled component is a component that stores its own state internally. It's a bit more like traditional HTML.

- What is the purpose of the `key` prop when rendering a list of components?
  The purpose of a key is a way for React to identify which items are changed/added/removed. They are given to repeated elemements to provide a stable identity.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  Using an array index is a poor choice for a key becuase the items in the Array may change order or be deleted. This may cause performance issues or bugs.

- Describe useEffect. What use cases is it used for in React components?
  useEffect is a built in 'hook' for use in fetching data, starting a timer or manually changing the DOM. It runs after the first render and will run after all rededers by default.

- What does useRef do? Does a change to a ref value cause a rerender of a component?
  useRef is another built in 'hook' that returns a mutable object with a key of 'current' whose value is equal to the initial value passed into the hook. This object persistes across renders and changes do not cause a rerender.

- When would you use a ref? When wouldn't you use one?
  You would use a ref if you are accessing an underlying DOM element or setting up or clearing timers. You wouldn't want to use one if you are using them to access the DOM and
  make changes.

- What is a custom hook in React? When would you want to write one?
  A custom hook in React is a function that is written to handle a specific event and is located in its own file whose name starts with 'use'. You would write one when you wanted to reuse code in different areas
