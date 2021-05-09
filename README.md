# simple-rich-text-editor

Technologies used: 
 - Vanilla JS/CSS/HTML 

Biggest issues & what I've learned from it:

 - I had some hard time with finding alternative for execCommand() (which apparently is now obsolete), but since this task forbid usage of any libraries whatsoever, I've decided to just go with it. It seems to work fine as far as this simple text editor goes. 
 
 - It took me a while to realise that I had to put querySelectors inside of arrow functions to make it work because in arrow functions, "this" (and variables as well) is lexically bound, which means that it uses "this" from the code that contains the arrow function. I left it as is, but I know I should probably just refactor them to normal functions instead.
