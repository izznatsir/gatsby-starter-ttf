<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's typescript-tailwind-framer starter
</h1>

Kick off your project with this typesript-tailwind-framer boilerplate. This starter is a Typescript starter that includes Tailwind CSS and Framer Motion and some additional packages and plugins to let you start right away. they are:

- tailwindcss
- autoprefixer
- @fullhuuman/postcss-purgecss
- gatsby-plugin-postcss
- framer-motion
- react-helmet
- gatsby-plugin-react-helmet
- gatsby-source-filesystem
- gatsby-image
- gatsby-transformer-sharp
- gatsby-plugin-sharp

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the typescript-tailwind-framer starter.

    ```shell
    # create a new Gatsby site using the hello-world starter
    gatsby new my-ttf-project https://github.com/izznatsir/gatsby-starter-ttf
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-ttf-project/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── images
    ├── src
    ├── static
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── tailwind.config.js
    ├── tailwind.full.config.js
    ├── tsconfig.json
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/images`**: This directory will contain images that being sourced by gatsby-source-filesystem. It means, the images will be automatically transformed by gatsby-transformer-sharp to be performant images out of the box. To access the images sourced by gatsby-source-filesystem, you need to make graphql query inside your page or component.

3.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

4.  **`/static`**: This directory will contain static assets that you want to use without transformation, such as a favicon.ico file.

5.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

6.  **`.prettierignore`**: This file tells prettier which files it should not format for.

7.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

8.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

9.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

10. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

11. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

12. **`tailwind.config.js`**: This file is where you put customization rules of Tailwind CSS. To learn more about Tailwind CSS, head [to Tailwind CSS website](https://tailwindcss.com).

13. **`tailwind.full.config.js`**: This file has no functional use. It only acts as a reference of Tailwind CSS default values.

14. **`tsconfig.json`**: This file contains Typescript compiler rules. To learn more about Typescript config file, head [to Typescript documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

15. **`LICENSE`**: Gatsby is licensed under the MIT license.

16. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

17. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

18. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

- **To learn how to add test to your app, head [to our documentation](https://www.gatsbyjs.org/docs/testing/).** You can add unit testing, end-to-end testing and React component testing.

- **New to Framer Motion? head [to Framer Motion documentation](https://framer.com/motion/).**
