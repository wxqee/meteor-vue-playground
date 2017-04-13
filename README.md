## Browser supported

Vue Material supports the latest version of all Browsers. This means:

* Google Chrome 52+
* Firefox 48+
* Safari 9+
* Opera 38+
* Edge 12+
* IE 11

## Refs

* [Meteor collection](http://docs.meteor.com/api/collections.html) operations.

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

# Build bundle for production

Ubuntu x86_64

```shell
# deploying to a Ubuntu linux server:
npm install --production
meteor build $HOME/build --architecture os.linux.x86_64
```

# Install bundle for production

Upload bundle package

```shell
scp $HOME/build/meteor-vue-playground.tar.gz robin@192.168.10.81:~/
```

Deploy

```shell
# client node
ssh robin@192.168.10.81

# server node
robin@192.168.10.81:/home/robin
$ mkdir -p ~/deploy/meteor-vue-playground

robin@192.168.10.81:/home/robin
$ cd ~/deploy/meteor-vue-playground

robin@192.168.10.81:/home/robin/deploy/meteor-vue-playground
$ tar zxvf ~/meteor-vue-playground.tar.gz
$ cd bundle/

robin@192.168.10.81:/home/robin/deploy/meteor-vue-playground/bundle
$ nvm use 4.6.2     # node v4.6.2 for Meteor 1.4.x
$ (cd programs/server && npm install)
$ MONGO_URL=mongodb://localhost:27017/meteor-vue-playground ROOT_URL=http://192.168.10.81:8000 PORT=8000 node main.js
```

## FAQ

# vue-material meteor build issue?

**Issue**

Install dependencies

```shell
meteor npm install
meteor
```

Here errors during startup

```text
[HMR] Dev server listening on port 3003
[ 'tag <circle> has no matching end tag.' ]  \

Unable to resolve some modules:

"autosize" in /Users/xiaoqiang/workspace/_meteor/meteor-vue2-todo/node_modules/vue-material/src/components/mdInputContainer/mdTextarea.vue (web.browser)
"element.scrollintoviewifneeded-polyfill" in /Users/xiaoqiang/workspace/_meteor/meteor-vue2-todo/node_modules/vue-material/src/components/mdMenu/mdMenuItem.vue (web.browser)

If you notice problems related to these missing modules, consider running:

meteor npm install --save autosize element.scrollintoviewifneeded-polyfill
```

**fix**

This issue is because Vue default preCompiler effects to node_modules, to avoid the files from it can fix this issue.

```shell
echo "node_modules/" >> .vueignore
```
