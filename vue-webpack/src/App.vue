<template>
  <div id="app">
    <hr>
    <router-link to="/">Home</router-link>
    <router-link to="/quiz">Quiz</router-link>
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
