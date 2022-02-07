# rehype-code-ltr

```bash
npm i rehype-code-ltr
```

# What is this?

rehpye plugin add `dir="ltr"`attribute automatically to `<code>` HtmlElement, this is helpful when you have page that include RTL Layout, for example a blog and you need to show a code snippet

**Code with RTL Layout**
<code dir="rtl">
// JavaScript Regex Shorthand Syntax...
/\d+/ig
</code>

**Code with LTR Layout**
<code dir="ltr">
// JavaScript Regex Shorthand Syntax...
/\d+/ig
</code>

# How to use it with astro?

1. run `npm install rehype-code-ltr`

2. go to astro.config.mjs 

3. edit javascript object and add 
```js
...
markdownOptions: {
    render: [
	    '@astrojs/markdown-remark',
		    {
            rehypePlugins: [
                ...
                // add this
                ['rehype-code-ltr'],
            ]
		    },
	],
	}
...
```