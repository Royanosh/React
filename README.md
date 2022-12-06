# React

## React Hooks

## React Hooks Rules

> > ### Only Call Hooks At The Top Level
>
> - Don't Call Hooks inside loops, conditions, or nested functions.
>
> > ### Only Call Hooks From React Functions
>
> - Call Them From WithIn The React Function Components And Not Just Any Regular JavaScript Function.

- ## useState

  - [Counter with class component and function component.](./React%20Hooks/useState/counter/)

  - [Reset, Increase, Decrease, Increase Five by previousState](./React%20Hooks/useState/previous_state/)
  - [Input and Display FirstName and LastName by object in useSate](./React%20Hooks/useState/object_in_use_state/)
  - [Add Random Number In Array and Displaying All Numbers (Array In useState)](./React%20Hooks/useState/array_in_use_state/)

- ## useState - Summary
  - The useState hooks let us add state to functional components.
    -In classes, the state is alway an object but in useState hook the state doesn't have to be an object. It can be String, Object, Array, Number, Boolean , etc.
  - The useState hook return two elements which are current value (first element) and setter function (Second element).
  - If you want to use previous state value, you can pass a function `previousState => (previousState + 1)` (Random Example) to setter function.
  - We have to use spread operator when we are using objects and arrays in useState. For Example `setState[...state,newVaue]`.
