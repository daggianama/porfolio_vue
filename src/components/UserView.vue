<template>
  <div class=" mt-24">
    <div class="featured-selected flex flex-wrap w-full gap-1">
      <img class="w-40vw h-70vh " :src="projects[index].image" />
      <div class="w-96 ">
        <h2>{{ projects[index].title }}</h2>
        <p>{{ projects[index].description }}</p>
      </div>
    </div>
    <div class="gallery">
      <div class="h-64 w-64" v-for="(project, i) in projects" key="i" @click="FeatureProject(i)"> 
        <img class="w-full h-full object-cover" :src="project.image" />
      </div>
   </div>
  </div>
</template>

<script>

export default {
  name: "UserView",

  props: ['projects'],   //work as an argument needed for this component
  // for more detailed validation, use an object:
  //  {
  //   projects: {
  //     type: Array,
  //     required: true,
  //     default: () => [],
  //   }
  // },
  data() {
    return {
      index: 0,
    }
  },
  methods: {
    FeatureProject(i) {
      this.index = i
    }
  }
};
</script>


<style>


.project-img:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;

}


</style>
