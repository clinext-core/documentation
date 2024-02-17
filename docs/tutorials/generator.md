---
sidebar_position: 1
---

# Build the CliNext generator

We are going to build step by step the CliNext generator app.
Environment: Mac OS Sonoma

## Generate the project
### Install [Node JS]
We need to install Node JS first:
Install [Node JS](https://nodejs.org/en/download/)

```bash
brew install node
```

Check if Node has been installed correctly:
```bash
node -v
```

Male sure npm is available as well:
```bash
npm -v
```

### Step 2: Create a new CliNext app 
Let's generate a brand new app with the CLI:

```bash
npx clinext app new 
```
The clinext will ask a series of questions:

![logo](/screenshots/clinextgenerator.png)


## Create the ```app new```  command

### Add the command
```app new``` will generate a new CliNext app project.

- Go to ```src/commands```
- Create the ```src/commands/app```
- Add a ```src/commands/app/main.js```. This file is necessary for every command folder. It does not have to do anything.

```js
export default ({
  _clinextType: 'command',
  position: 1,
  name: 'app',
  description: `App management 🤖`,
  questions: [
  ],
  example: "$0 app new --appName='MyApp'",
})
```

### Create the project
- Create a ```src/commands/app/new.js``` file. This file will hold the actual code for creating new project for the app and the extension.

```js
import ChunkAppContent from '../../lib/chunks/app/content/index.js'

export default ({
  _clinextType: 'command',
  name: 'new',  
  description: `Generate a CliNext app 🚀`,
  questions: [
  ],
  example: "$0 app new --appID='MyApp'",
  handler: async () => {
   
  },
})
```

As you can see the command is quite empty at this point. Let's start by defining the questions we'll need from the user.

### Craft questions
For this command we'll need:
- The id of cli
- The description
- The destination (folder)
- The package manager the user wants to use
- Whether the user wants to install dependencies or not
- Whether the user wants to initialize a git repository or not

- Create a ```src/questions/destination.js``` file. This file will hold the question for the destination. We are going to use the same question for the extension project, so we are better off extracting it right away.

```js
import path from "path"

export default ({
  _clinextType: "question",
  type: 'string',
  alias: 'd',
  message: "Choose a destination",
  promptType: "file-tree-selection",
  name: "destination",
  onlyShowDir: true,
  root: "./",
  onlyShowValid: false,
  enableGoUpperDirectory: true,
  hideRoot: false,
  hideChildrenOfValid: false,
  hideValidationErrorMessage: true,
  transformer: (name,) => {
    if (!name || !name.length) {
      return ''
    }

    const _name = name.split(path.sep).pop()
    return `${_name}`
  }
})
```
In this question we:
- Use the ```file-tree-selection```promptType which allows us navigate in the local machine file system and pick a folder.
- We only show folders (```onlyShowDir```) 
- Folders don't need to pass any validation test (```json onlyShowValid: false```) 

That's it. The question can be used anywhere in the project by referring to its name (```destination```).

Let's create the remaining questions the same way:

- ```src/questions/gitInit.js```
```js
export default ({
  name: 'gitInit',
  type: 'boolean',
  defaultValue: true,
  message: `Initialize a git repository`,
  promptType: 'confirm',
  alias: 'g',
})
```

- ```src/questions/installDependencies.js```
```js
export default ({
  name: 'installDependencies',
  type: 'boolean',
  promptType: 'confirm',
  alias: 'i',
  defaultValue: true,
  message: 'Install dependencies'
})
```

- ```src/questions/packageManager.js```
```js
export default ({
  name: 'packageManager',
  type: 'string',
  promptType: 'list',
  alias: 'p',
  defaultValue: 'npm',
  message: "Package manager ('npm', 'yarn' or 'pnpm')",
  choices: [{
    name: 'npm',
    value: 'npm'
  }, {
    name: 'yarn',
    value: 'yarn'
  }, {
    name: 'pnpm',
    value: 'pnpm'
  }]
})
```

- ```src/questions/license.js```
```js
export default ({
  name: 'license',
  type: 'string',
  promptType: 'list',
  alias: 'l',
  defaultValue: 'MIT',
  message: 'License',
  description: '',
  subMessage: '("MIT", ...)',
  choices: [
    "Apache 2.0",
    "MIT",
    "Mozilla Public License 2.0",
    "BSD 2-Clause (FreeBSD) License",
    "BSD 3-Clause (FreeBSD) License",
    "Internet Systems Consortium (ISC) License",
    "GNU AGPL 3.0",
  ],
})
```

### Use questions in commands

Now that we have defined most of the questions, we can use them in the command:

```js
import ChunkAppContent from '../../lib/chunks/app/content/index.js'

export default ({
  _clinextType: 'command',
  name: 'new',
  position: 0,
  description: `Generate a CliNext app 🚀`,
  questions: [
    {
      name: 'appID',
      type: 'string',
      promptType: 'input',
      alias: 'n',
      defaultValue: 'myappID',
      message: 'App ID',
      validators: [{
        id: 'nonempty',
        params: { maxParams: 50 }
      }]
    },
    {
      name: 'appDescription',
      type: 'string',
      promptType: 'input',
      defaultValue: 'A CliNext app',
      message: 'App description',
      validators: [{
        id: 'nonempty',
        params: { maxParams: 12 }
      }]
    },
    {
      name: 'installDependencies',
    },
    {
      name: 'license',
    },
    {
      name: 'packageManager',
    },
    {
      name: 'gitInit',
    },
    {
      name: 'destination',
      transformers: [{
        modes: ['out'],
        template: `<%= destination %>/<%= appID %>`
      }]
      // validators: [{ id: 'nonempty' }]
    },
  ],
  example: "$0 app new --appID='MyApp'",
  handler: async () => {
  },
})
```

- Note that we chose to keep the ```appId``` and ``appDescription inline because we don't have plans to reuse them anywhere else. Thus, their full definition is right here.
- The question defined in ```src/questions``` are referenced by their ```name```. Any property we might add here will override its corresponding value defined in the ```src/questions/...```file.

At this point we can see what the command help will look like:
```bash
npx clinext app new -h
```

```bash
Generate a CliNext app 🚀

Options:
  -n, -n, --appID                App ID                                                                                            [string] [default: "myappID"]
      --appDescription           App description                                                                             [string] [default: "A CliNext app"]
  -i, -i, --installDependencies  Install dependencies                                                                                  [boolean] [default: true]
  -l, -l, --license              License                                                                                               [string] [default: "MIT"]
  -p, -p, --packageManager       Package manager ('npm', 'yarn' or 'pnpm')                                                             [string] [default: "npm"]
  -g, -g, --gitInit              Initialize a git repository                                                                           [boolean] [default: true]
  -d, -d, --destination          Choose a destination                                                                                                   [string]

Examples:
  clinext app new --appID='MyApp'
```

### Build the handler 

We can now build the command handler. Since we are going to generate a project, we'll need a good generator. We'll use the  [*chunks extension*](https://github.com/@clinext/chunk-extension) that's made for this task.


## Create the ```extension new```  command
```extension new``` will generate a new extension project

- Go to ```src/commands```
- Create the ```src/commands/app``` and ```src/commands/extensions``` folders
- Add a ```src/commands/app/main.js``` and ```src/commands/extensions/main.js``` files. These files are necessary for every command folder
- Add a ```src/commands/app/new.js``` and ```src/commands/extensions/new.js``` files. These files will hold the actual code for creating new project for the app and the extension.


```js
export default ({
  _clinextType: 'command',  
  name: 'app',
  description: `App management`,
  questions: [
  ],
  example: "$0 app",
  handler: async () => {
    console.log('App management. Please use the help.')
  }
})
```
## Write handler logic with chunk 


The project is available at [https://github.com/clinext-org/generator](https://github.com/clinext-org/generator)
