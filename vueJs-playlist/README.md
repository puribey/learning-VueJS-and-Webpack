# vuejs-playlist

> Vue.js project. 
> Learning Vue from the begining. 
> Vue Rocks :)
> Usage => 

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Props

Passing info from a parent component to a child component:

* We took the object ninjas out of the child component and put it inside the parent component. 
* We used v-bind at the top of the parent component inside the name tag of the child component that is being called and use the object there.
* Then we passed ninjas in the array of props inside the child. 
* This way we could use the object ninjas through the parent. 


## Reference Types Vs Primitives

Modifying info in objects all over the site: 

If I add a button to delete a ninja from the object ninjas and I pass it as a method inside the Ninjas component, it will delete ninjas in every Ninja component arround the web. 

You can set different props to different vue components and then use methods within those components to change info inside that component instead of changing it in both. 


## Events (child to parent)

Use an event to change the original info in the parent or root component to update all the components that use that info. 

For this, we create a method that reacts to the @click inside the header component by using $emit, a function and giving it info to pass through. Then we bind that info inside the component tag in the root component and we create a method to pass that info created in the child method. 



