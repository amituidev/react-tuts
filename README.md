<p align="center">
 <img align="center" width="300" height="300" src="https://cdn-images-1.medium.com/max/512/1*6kK9j74vyOmXYm1gN6ARhQ.png">
</p>

# Content
- [Introduction to React JS & Virtual Dom ](https://github.com/amituidev/react-tuts/tree/master#what-is-react-js-)
- [Basic Project Setup](https://github.com/amituidev/react-tuts/tree/setup#setup)
- [Components Props and State](https://github.com/amituidev/react-tuts/tree/components-and-props#components-and-props)
- [Component lifestyle and State](https://github.com/amituidev/react-tuts/tree/component-lifestyle-state#the-component-lifecycle)
- [Handling Events](https://github.com/amituidev/react-tuts/tree/handling-events#handling-events)
- [Todo example](https://amituidev.github.io/react-tuts/)

# What is React js ?

A javaScript library for building user interfaces.</br> 

It uses a concept called the Virtual DOM that selectively renders subtrees of nodes based upon state changes. 
It does the least amount of DOM manipulation possible in order to keep your components up to date.

# What is DOM ?

The DOM is an object-oriented representation of the web page. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

<p align="center">
 <img align="center" width="800" src="https://snipcademy.com/code/img/tutorials/javascript/dom.svg">
</p>

Although you have all the methods to change the DOM tree but it comes with lot of cost. If you want to change the some child node. Javascript has to repaint the window with margin, padding, color etc properties.

DOM object knows how to re-render the page but it is not so intelligent to keep track of each node and change only the node which is changing.

**Lets take an example -**
You have decorated the room with 100 balloons.

Now your chacha <img align="center" width="25" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/129/older-man_emoji-modifier-fitzpatrick-type-6_1f474-1f3ff_1f3ff.png"> told you color of each balloon should be red. so you remove all the balloons and now decorate the room with red balloons.

Chacha <img align="center" width="25" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/129/older-man_emoji-modifier-fitzpatrick-type-6_1f474-1f3ff_1f3ff.png"> comes again and ask you now change the balloon no. 90 with blue colored ballon. Now you remove all balloons and bring 99 red balloons and 1 blue balloon and paint accordingly.

Chacha <img align="center" width="25" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/129/older-man_emoji-modifier-fitzpatrick-type-6_1f474-1f3ff_1f3ff.png"> comes again and ask please change balloon no 80 to green. You remove all the balloons. Go market bring 98 red, 1 blue, 1 green. And decorate the room accordingly.

# What is Virtual Dom ?

Virtual DOM is React’s Object that represent the Browsers DOM, Which is intelligent to make changes in the DOM with the help of Diff Algorithm. Few Blog says, it is so fast that it can produce 20000 nodes per second.

<p align="center">
 <img align="center" width="800" src="https://www.cronj.com/blog/wp-content/uploads/DOM2.png">
</p>
<p align="center">
 <img align="center" width="800" src="https://raw.githubusercontent.com/amituidev/react-tuts/master/app/img/react-dom.png">
</p>

# How does it work ?

1. Whenever a DOM is rendered into browser React generate copy of that object as a Virtual DOM.

2. When user interacts and want to change the DOM, React generate another copy of **updated virtual DOM**.

3. React Compare **virtual DOM** vs **updated Virtual DOM**, if there are changes then only react will render the Browser DOM, otherwise not.

4. Now if some changes between them, react is intelligent to find which node has changed using the diff algorithm. React tells browser DOM, this node subtree need to change everything else remains as it is.

## What is a React Component?

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

## Type of React Components

There are two main types of components **Class Components** and **Functional**.
If you don’t need lifecycle methods prefer the **Functional or Stateless Components**.

### Class Components

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Functional or Stateless Components

```
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
}
```

### What is JSX ?

Fundamentally, JSX just provides **syntactic sugar** for the **React.createElement(component, props, ...children)** function.
[Read more.](https://reactjs.org/docs/introducing-jsx.html)

JSX code example:

```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```
ReactDOM.render(
    <element />,
    document.getElementById('root')
  );
```

- [Setup](https://github.com/amituidev/react-tuts/tree/setup#setup)
- [Components and Props](https://github.com/amituidev/react-tuts/tree/components-and-props#components-and-props)
- [Component lifestyle and State](https://github.com/amituidev/react-tuts/tree/component-lifestyle-state#the-component-lifecycle)
- [Handling Events](https://github.com/amituidev/react-tuts/tree/handling-events#handling-events)
- [Todo example](https://amituidev.github.io/react-tuts/)
