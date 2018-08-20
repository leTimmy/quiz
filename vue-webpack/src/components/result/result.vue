<template>
    <div>
        <h1>Quiz finished</h1>
        <p>You got {{points}} points</p>
        <p v-if="points < 70">Unluckily you did not get enough to win a price :(</p>
        <p v-if="points >= 70">Congratulations, you got enough points to win a price :)</p>

        <router-link to="/">Take me home</router-link>
    </div>
</template>

<script src="./result.js"></script>