# vuejs-playlist

> Vue.js project. 
> Learning Vue from the begining. 
> Vue Rocks :)
> Usage => 

     bash
     # install dependencies
     npm install

     # serve with hot reload at localhost:8080
     npm run dev

     # build for production with minification
     npm run build


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


## Event Bus

Connect two child components with out the root component. 

 
     # in main.js
     export const bus = new Vue();

    # in Header.vue and Footer.vue
    import{ bus } from'../main';

    # in Header.vue 
    methods: {
	changeTitle: function(){
	  this.title = 'Vue Wizards';
	  bus.$emit('titleChanged', 'Vue Wizards');
    }
    }

    # in Footer.vue
    created(){
    bus.$on('titleChanged', (data) => {
      this.title = data;
    })
    }


## Life-cycle hook

1. beforeCreate => we can run some code prior to being created 
2. created => not mounted in DOM yet , also good point to fetch data in DB
3. beforeMount => do something before mounting 
4. mounted => access in DOM 
5. beforeUpdate => makes rerendering 
6. updated => DOM again 
7. beforeDestroy 
8. destroy => final clean up 

    beforeCreate(){
        alert('beforeCreate');
      },
      created(){
        alert('created');
      },
      beforeMount(){
        alert('beforeMount');
      },
      mounted(){
        alert('mounted');
      },
      beforeUpdate(){
        alert('beforeUpdate');
      }, 
      updated(){
        alert('updated');
      }


