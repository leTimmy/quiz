<template>
  <div>
    <div v-for="(item, index) in questions" :key="item.questionNumber">
        <div v-if="index === questionNumber - 1">
            <div class="question">{{questionNumber}}. {{ item.name }}</div>
            <div class="answer-container">
                <div @click="answerClicked(1)" class="answer">{{item.answer1}}</div>
                <div @click="answerClicked(2)" class="answer">{{item.answer2}}</div>
                <div @click="answerClicked(3)" class="answer">{{item.answer3}}</div>
                <div @click="answerClicked(4)" class="answer">{{item.answer4}}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script src="./quiz.js"></script>
<style src="./quiz.scss">
