<template>
  <div class=" ">
      <NavBar />
      <header class="  my-4 ">
        <nav class="container flex h-16 p-6 gap-8 items-center justify-between  ">
        
          <div class="flex items-center gap-3 flex-1">
              <h1 class="text-2xl">MY PORTFOLIO</h1>
            </div>
            <!-- bind : the class attribute to a js exp that will give a class if the condition is true -->
            
            <div class="flex gap-8 justify-end">
              <a :class="{ active: isAdmin  }" @click="isAdmin = true">ADMIN</a>
              <a :class="{ active: !isAdmin }" @click="isAdmin = false">USER</a>
            </div>
          
        </nav>
          
      </header>
    <admin v-if="isAdmin" @createProject="addProject" />  
    <user v-else :projects="allProjects"/>
  </div>
</template>
<!-- if isAdmin is true, render admin component 
      v-else user view will be shown  -->
      <!-- in admin @create is the scream of the child and capture ir on addproject -->



<script >
import admin from "./components/AdminView.vue";
import user from "./components/UserView.vue";
import NavBar from "./components/NavBar.vue";
import {RouterLink} from "vue-router";

export default {
  name: "app",
  components: {
    user,
    admin
  },
  data() {
    return {
      isAdmin: true,
      allProjects: [
        {
          title: "Project 1",
          image: "https://plus.unsplash.com/premium_photo-1683288295841-782fa47e4770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.  Lorem ipsum dolor sit amet consectetur adipis",
        },
        {
          title: "Project 2",
          image: "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
          title: "Project 3",
          image: "https://plus.unsplash.com/premium_photo-1668461477164-c92856f347bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
      ],
    };
  },
  methods: {
    addProject(project) {  // this method will be called by AdminView and receive and arg call project
      this.allProjects.push(project);
    }
  }
};
</script>


<style lang="scss" scoped></style>