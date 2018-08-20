<template>
  <div>
    <h1>Frage {{questionNumber}}</h1>

    <div v-for="(item, index) in questions" :key="item.questionNumber">
        <div v-if="index === questionNumber - 1">
            <span>{{ item.name }}</span>
            <div class="answer-posibilities">
                <div @click="answerClicked(1)">{{item.answer1}}</div>
                <div @click="answerClicked(2)">{{item.answer2}}</div>
                <div @click="answerClicked(3)">{{item.answer3}}</div>
                <div @click="answerClicked(4)">{{item.answer4}}</div>
            </div>
        </div>
    </div>

  </div>
</template>

<script src="./quiz.js"></script>
