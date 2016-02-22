# iota_module_madness
Module Madness
Description
Module Madness
In this challenge, you will need to spin up a new project (much like we did in lecture).

The first module will export a function that returns a random number after taking in a min and max value as arguments 
(hint: you can use random number functions from previous assignments). When you call this module, use '100' as your min, 
and '1000000' as your max.

The second module should accept a number and convert it to a USD value (Hint: you will want to Google examples of this. 
I found a couple reasonable examples of this in a simple 5 minute search).

The third module should require the other two modules. It should have two function exports. The first function export 
should be the return of the first module being passed into the second module. The other function should be a simple text 
return that says “Account balance: \n”.

Finally, in the app.js, set up a server, write a 200 head, and write a message that combines the text return of the 
third module, concatenating the return from the third module that produces a dollar number.

In the end, you terminal should produce the below result when you curl localhost:3000, ' Account balance: $156,301 '
