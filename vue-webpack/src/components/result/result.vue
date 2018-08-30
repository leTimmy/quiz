<template>
  <div>
    <div class="image-container">
        <div class="section-teaser">
      <div class="teaser">
        <span class="teaser__background"></span>
        <span class="teaser__content">
          <span class="teaser__content__title" v-if="points >= 70">Gratulation, mit deinen {{points}} erhälst du einen Preis.</span>
          <span class="teaser__content__title" v-if="points < 70">Vielen Dank fürs mitmachen. Leider reicht es mit deinen {{points}} Punkten nicht für einen Preis.</span>
          <router-link class="teaser__content__subtitle" to="/quiz">Quiz neustarten</router-link>
        </span>
      </div>
    </div>
      <img src="../../assets/sbb_mitarbeiter_collage_2000x1130px.jpg" width="100%" class="background-image">
    </div>
  </div>
</template>

<script src="./result.js"></script>
<style src="./result.scss">
