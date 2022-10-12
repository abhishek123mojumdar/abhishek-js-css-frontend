Single page application
React is a Js library , for building user interfaces.
React is created and maintained by Facebook
it has a component based architecture , It helos to breakdown our application into small encapsulated parts which is then further agrregated to create complex UI
The main positive of using component is to write reusable code i.e a code can be used many times. We do not need to write the same code again and again for the same functionality . Just as we do in functions.
React is decalrative --> i.e tell React what is the requirement and React with the help of React DOM livrary will create the required UI for you . (Artist example : draw a landscape)
React can be integrated with any application. Just like Jquery.

## Prerequisites :

1. Node JS -- > node -v
2. Visit this website -- https://github.com/facebook/create-react-app and check out how to create a react project
3. The first page that we should concentrate upon is App.js . This the first react function with JSX template that is excuted. This is the place we start writing our JSX code .
4. The App.js function is rendered inside the index.js . Never make any changes in index.js until absolutely necessary

## Folder Structure :

1. Package.json --> this will have all the dependencies related to the react application. (this is a configuration file which will have notes of all the dependecies)
2. Node modules will have all the physical dependencies installed
3. Public --> This is the folder which has the index.html file . This is the only html file that is present in the whole application . (Show Angular)
4. There is only one div tag in the index.html . The id of the div tag is 'root'. This id is being reference in the index.js and the whole react application is rendered into this div tag .

## Parts of react

## Components

1.  In react components can be considered as a part of the user interface
2.  There are 2 types of react components functional components and class components
3.  A functional component is a just a JavaScript function which returns as JSX code
4.  A Class component is JS class which can use the concepts of OOJS (Object oriented JavaScript)
5.  Inside a component there can be only one root elemeent .The root element can not have siblings.
6.  Inside a functional component if we have a one single function that is exported then, and if that function is exported using default keyword then we would not need a double curly brace to import the function

## Functional components and class components

1. Try to create functional components as much as possible. If it is possible to create a component using both functional and class component try to create it using
   functional component
2. Functional component does not have a 'this' keyword hence eleminating any kind of ambiguity
3. Class components have this keyword which helps maintaining context
4. Class components provide lifecycle hooks

## JSX

1. This is expanded as JavaScript XML which is an extension of JavaScript language
2. Jsx has a tag name , attributes and children
3. JSX gets transpiled in JavaScript

Compiler: is an umbrella term to describe a program that takes source code written in one language and produce a (or many) output file in some other language. In practice we mostly use this term to describe a compiler such as gcc which takes in C code as input and produces a binary executable (machine code) as output.

Transpilers are also known as source-to-source compilers. So in essence they are a subset of compilers which take in a source code file and convert it to another source code file in some other language or a different version of the same language. The ouput is generally understandable by a human. This output still has to go through a compiler or interpreter to be able to run on the machine.

## props and state

1. Props are passed from one component to another component , whereas state is maintained within the component
2. Props are function parameters and state is a variable declared inside a function
3. Props are immutable whereas state can be changed using setState
