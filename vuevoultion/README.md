# vuevolution

> Best way of learning Vuejs 

## Slots 

Slots allow us to input data from a parent component into a child component. 

     # in App.vue (parent)
	     <div slot="form-header">
	        <h3>This is the title of the form</h3>
	        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
	     </div> 

     # in formHelper.vue (child)
     	<slot name="form-header"></slot>

* In order to receive dynamic data we also have to define it on the parent component 
* Slots are useful when we want to create a general structure that can be modify. Ex: form template. 

## Dynamic Components

* We can dynamicly output components to the browser in particular places in our template.

    # in App.vue
    <keep-alive> <!-- keep info changed in the component when we go from one to another -->
      <component v-bind:is="component"></component>
    </keep-alive>
    <button @click="component= 'form-one'">Show form one</button>
    <button @click="component= 'form-two'">Show form one</button>

## Input, checkbox and select binding

* We can use input binding to clone what we write in an input inside another section of our page.
* v-model.lazy="blog.title" is to make the content output when we change inputs, press tab or move out of the input. 

    # in addBlog.vue 
    



