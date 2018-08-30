<template>
  <div id="app">
    <div class="header">
      <img src="./assets/sbb_logo.jpg" width="200px" float="right">
    </div>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>


<style src="./styling/reset.css"></style>
<style src="./styling/main.css"></style>