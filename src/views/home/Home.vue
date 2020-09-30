<template>
  <div>
    <div class="d-flex justify-content-center">
      <img src="../../assets/logo.png">
    </div>
    <to-do/>
  </div>
</template>

<script>
  import ToDo from "../../components/ToDo";
  export default {
    name: "Home",
    components: {ToDo}
  }
</script>

<style scoped>

</style>
