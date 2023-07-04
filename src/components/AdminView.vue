<template>
  <div class="flex flex-col pt-32 px-12 w-50vw gap-4">
    <div class="flex gap-6 w-full ">
      <div class="flex flex-col w-full gap-2">
        <h3>Project Title</h3>
        <input class="h-10" v-model="title" />
      </div>
      <div class="description flex flex-col w-full gap-2">
        <h3>Image URL</h3>
        <input class="h-10" v-model="image" />
      </div>
    </div>
    <div class="description flex flex-col w-full gap-2">
      <h3>Project Description</h3>
      <textarea
					type="text"
					v-model="description"
          class="h-20">
				</textarea>
    </div>
    <button class="my-6 border-2 border-gray-600 py-3 hover:bg-gray-600 hover:text-white" @click="handleSubmit">SUBMIT</button>
  </div>
</template>

<script>
export default {
  name: "AdminView",
  data() {
    return {
      title: "",
      image: "",
      description: ""
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("createProject", {
        title: this.title,
        image: this.image,
        description: this.description,
      });
      this.title = '';
      this.image = '';
      this.description = '';
    }
  }
};
</script>

<style>


</style>
