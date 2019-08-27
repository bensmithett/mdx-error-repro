import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Content, {frontMatter, tableOfContents} from './some_markdown.mdx'

const output = ReactDOMServer.renderToString(
  <div>
    <Content />
  </div>
)

console.log(output)
console.log(frontMatter)

// tableOfContents is a function although the docs say...
// > A table of contents object is exported on the tableOfContents object via mdx-table-of-contents.
// Inspecting the function though you can see the object it's trying to return...
console.log(tableOfContents.toString())
// But calling the function expects a global `MDXTag` to exist and blows up
console.log(tableOfContents())
