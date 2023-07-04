<template>
  <div class="form">
    <div class="titleUrl-group">
      <div class="description group-input">
        <h3>Project Title</h3>
        <input v-model="title" />
      </div>
      <div class="description group-input">
        <h3>Image URL</h3>
        <input v-model="image" />
      </div>
    </div>
    <div class="description group-input">
      <h3>Project Description</h3>
      <textarea
					type="text"
					v-model="description">
				</textarea>
    </div>
    <button class="submit" @click="handleSubmit">SUBMIT</button>
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
.form {
  display: flex;
  flex-direction: column;
  gap: 1em 0;
  padding: 8em 0;
  width: 100%;
  max-width: 80vh;

}

.titleUrl-group {
  display: flex;
  gap: 0 1em;
  width: 100%;
}

.group-input {
  display: flex;
  flex-direction: column;
  align-content: stretch;
  width: 100%;
  height: 100%;

}

input, textarea{
  width: 100%;
}

.submit {
  color: black;
  border: 1px solid black;
  margin-top: 10px;
  padding: 4px 6em;
}

.submit:hover {
  background-color: black;
  color: white;
}
</style>
