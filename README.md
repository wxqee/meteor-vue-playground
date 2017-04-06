
## Run

# Run Dev

Use node 4.8.0

```shell
nvm use
```

Install NPM dependencies.

```shell
meteor npm install
```

Run meteor dev server.

```shell
meteor
```

## Step by Step

# Create empty project

```shell
meteor create __PROJECT_NAME__
cd __PROJECT_NAME__
```

# meteor + vue

Make meteor project support Vue

```shell
meteor remove blaze-html-templates jquery
meteor add static-html akryum:vue-component
meteor npm i -S babel-runtime vue vue-meteor-tracker vue-router
meteor update
meteor update --all-packages
meteor npm i
meteor
```

Want some less in `.vue` files?

```shell
meteor add akryum:vue-less
```

Make file structure like this:

```text
src
- client.js
- index.html
- server.js
- imports
  - client
    - client.js
    - components
      - App.vue
  - server
    - server.js
    - publications.js
  - lib
    - collections.js
    - methods.js
```

ESlint?

```shell
meteor npm i -SD babel-eslint eslint eslint-config-standard eslint-plugin-html eslint-plugin-promise eslint-plugin-standard
```
