# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

     

* The user presses the 1 button.
* 
...Clicking the 1 button calls the handler function. This handler function calls the dispatch function with the addOne function as its argument. Dispatch takes the addOne functions result which is a type of ADD_ONE and inputing that into the reducer function. The type of ADD_ONE renders the action of adding 1 to the current value of state

* TotalDisplay shows the total plus 1.

TotalDisplay is passed the state.total value as props from App.js and displays the current total as a slice of state. 