// Challenge 1
// Create a function that gives a personalized greeting. 
// This function takes two parameters: name and owner.
// Use conditionals to return the proper message:
// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// Answer 1
export function greet(name: string, owner: string): string{
    return name === owner ? "Hello boss" : "Hello guest";
}

// Challenge 2
// Write a function that removes the spaces from the string, 
// then return the resultant string.
// Examples (Input -> Output):

// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

// Answer 2
export function noSpace(x:string):string {
    return x.replace(/\s/g, "");
}