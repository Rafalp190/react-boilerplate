import React from 'react'
import ReactDom from 'react-dom'

const Hello = () => (
  <h1>Hello!</h1>
);

const Root = document.createElement('div', {id: 'root'})
document.body.appendChild(Root)

ReactDom.render(
  <Hello />, 
  Root
)