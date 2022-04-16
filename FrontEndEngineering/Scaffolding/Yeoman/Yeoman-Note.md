# Yeoman - a commen scaffolding tool

Tips

- need work with different generators
- can build your own generator

## steps of using Yeoman

1. to clear what do you need
2. find the right generator or create your own generator
3. write your yo code
4. get the info from users' input
5. get the project structure

## Start

```bash
# install yeoman globally
yarn global add yo

# !! use node as example here

# install a generator you need 
yarn global add generator-node

# run the generator you just installed 
yo node

# sub-generator is a thing, add some new things from the original generator
yo node:cli
```

## Create your own Generator

- Generators have a structure

```bash
.
├── generators
│   └── app
│       ├── index.js # place to write your own yo logic
│       └── templates
│           └── example.html # can be any file
├── package.json
└── yarn.lock
```

- if you need a sub generator, the structure needs `component` folder

```bash
.
# ! is what you need, ? is optional
├── generators #!
│   ├── app #!
│   │   ├── index.js #!
│   │   └── templates #? when you need template
│   │       ├── foo.txt
│   │       └── h5.html
│   └── component #? when you need sub generator
│       └── index.js
├── package.json #!
└── yarn.lock #? when you use yarn
```

- Your generators have to be named by `generator-name`

- here is the code in `app/index.js`, all things you wrote are extended from class Generator
  
```javascript
const Generator = require('yeoman-generator');
module.exports = class extends Generator {
  prompting(){ 
    // (property) type?: "number" | "input" | "password" | "list" | "expand" | "checkbox" | "confirm" | "editor" | "rawlist"
    // use the apis to interactive with users
  }
  writing() {
    // use the apis to write files
  }
}
```
