<template>
  <div class="user">
    <div class="featured-selected">
      <img class="featured-img" :src="projects[index].image" />
      <div class="featured-text">
        <h2>{{ projects[index].title }}</h2>
        <p>{{ projects[index].description }}</p>
      </div>
    </div>
    <div class="gallery">
      <div class="project-img" v-for="(project, i) in projects" key="i" @click="FeatureProject(i)"> 
        <img :src="project.image" />
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
.user {
  margin-top: 5em;
}

.gallery {
  margin-top: 7vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18vw, 1fr));
  gap: 1em min(10px);
  justify-content: center;
}

.project-img {
  height: 20vw;
  width: 20vw;
}

.project-img:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.featured-selected {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 2vw;
  margin: 0 auto;
}

.featured-text {
  display: flex;
  flex-direction: column;
  gap: 1em;
  text-align: left;
  padding: 0 2em 0 0;
  max-width: 50%;
  min-width: 22em;
}

.featured-text h2 {
  width: 100%;
}

.featured-img {
  min-height: 20em;
  min-width: 20em;
  max-width: 30vw;
  max-height: 30vw;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
