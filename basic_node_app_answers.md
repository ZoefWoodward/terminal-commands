#### Exercises

>1. What is a Node module?
`A: A node module is a set of functions that you want to include in your application.`

>2. What is the main difference between exports and module.exports?
`A: Exports is a reference to module.exports, and module.exports is an empty object by default, which can be reassigned.`

>3. Why is using exports recommended?
`A: Exports is recommended except when you are planning on having your module be a specific object type. Exports references your node module functions, instead of overwriting them.`
