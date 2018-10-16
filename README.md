# reactreduxer
Create React components using Redux

Install with

```
npm install -g reactreduxer
```

To create a new project run `reactreduxer` with the name of the project you want to create
The `new` option must be used (or just `n`)

```
reactreduxer new my-project 
```

To create a component run `reactreduxer` with the name of the component you want to create
The `create` option must be used (or just `c`)

```
reactreduxer create MyComponent 
```

A folder will be created for the component and will contain the following files

* **MyComponent.tsx**
* **MyComponent.Container.tsx**
* **MyComponent.test.tsx**
* **MyComponent.scss**

You may also use a relative path

```
reactreduxer c ./components/MyComponent 
```
