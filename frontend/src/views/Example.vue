<template>
  <div class="example">
    <h1>First Component</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "example",
  data() {
    return {
      message: "Hello World"
    };
  }
};
</script>

<style lang="css" scoped>
h1 {
  color: red;
}
</style>
