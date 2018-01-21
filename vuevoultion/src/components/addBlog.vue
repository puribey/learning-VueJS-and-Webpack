<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form v-if="!submitted">
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required>
            <label>Blog content:</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <div id="checkboxes">
                <label>Ninjas</label>
                <input type="checkbox" value="Ninjas" v-model="blog.categories">
                <label>Wizards</label>
                <input type="checkbox" value="Wizards" v-model="blog.categories">
                <label>Mario</label>
                <input type="checkbox" value="Mario" v-model="blog.categories">
                <label>Jesus</label>
                <input type="checkbox" value="Jesus" v-model="blog.categories">
            </div>
            <label>Author</label>
            <select v-model="blog.author">
                <option v-for="author in authors" >{{author}}</option>
            </select>
            <div>
            <button class="btnSubmit" @click.prevent="postForm">Add Blog</button>
            </div>
        </form>
        <div class="successText" v-if="submitted">
            <h4>Thanks for adding this post!</h4>
        </div>
        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog title: {{blog.title}}</p>
            <p>Blog content: {{blog.content}}</p>
            <p>Blog categories:</p>
            <ul>
                <li v-for="category in blog.categories">{{category}}</li>
            </ul>
            <p>Author: {{blog.author}}</p>
        </div>
    </div>
</template>

<script>


export default {
    components: {
        
    },
    data () {
        return {
            blog: {
                title: "",
                content: "", 
                categories: [],
                author: ""
            },
            authors: ["Love", "Hate", "Envy","Friendship"],
            submitted: false,
        }
    },
    methods: {
        postForm: function(){ // use of vue-resourse 
            this.$http.post('https://vuejs-db-a5a56.firebaseio.com/posts.json', this.blog).then(function(data){
                console.log(data);
                this.submitted = true;
            });
        }
    }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}

.btnSubmit {
    margin: 25px 0px 15px 0px;
}

.successText {
    color: green;
}
</style>