#### Exercises

>1. Run the commands sort, wc, and uniq on the commands.js file. Explain how they work and what the output was.
```
SORT: Sort returns the file sorted alphabetically by line. For instance, it outputs "cat" before "echo" even though "echo" is before "cat" in the file, because C is before E.

WC: Returns the number of lines, words, and character count.
For instance, 'echo "Hey there!" | wc' will output 1 2 11.

UNIQ: Sorts each line in a file and only returns different lines. If there is a line in a file that is the same as the line above it, uniq will remove it from the output. So this will output the contents of the file, removing duplicates.

```

>2. Using the pipe (|) connect at least two commands and run it on commands.js. Explain what the output was and why the specific data was outputted.
`A: For example, echo 'Hello there! | wc' will take the output from echo 'Hello there!' and will pipe (become the input of) wc. This will then take that information, and output the wc of the information: (1, 2, 13).`

>6. Reverse String
Given a string, reverse the order of characters in each word within a sentence while maintaining the original word order and whitespace and return the string. To improve your problem-solving experience, use the suggested functions to solve the problem.
```
function reverseString(inputString) {

  		var reversedString = [];

  		var splitArray = inputString.split('');

  		var reverseArray = splitArray.reverse();

  		var joinedString = reverseArray.join('');


  		joinedString.forEach((element) => {
     			reversedString.push(element);
  		});

  		return reversedString;
	}

```
