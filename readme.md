# rehype-code-ltr

```bash
npm i rehype-code-ltr
```

# What is this?

rehpye plugin add `dir="ltr"`attribute automatically to `<code>` HtmlElement, this is helpful when you have page that include RTL Layout, for example a blog and you need to show a code snippet correctly


```
apt install
```

**Code with RTL Layout**:

![Without Plugin](../main/ScreenshotWithoutPlugIn.png)

**Code with LTR Layout**:

![With Plugin](../main/ScreenshotWithPlugIn.png)

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