import data from '../../store/questionStore.json'

export default {
    props: ['userAnswer'],
    data () {
      return {
          userAnswers: this.userAnswer, // array
          correctAnswers: [],           // array
          questions: data.questions,    // array
          points: 0                     // integer
      }
    },
    created() {
        // fill correctAnswers array with number from questionStore
        for(let i = 0; i < this.questions.length; i++) {
            this.correctAnswers.push(this.questions[i].correctAnswer);
        }

        // compare correctAnswers with userAnwers and add 10 points if answer matches
        for(let n = 0; n < this.userAnswers.length; n++) {
            if(this.userAnswers[n] === this.correctAnswers[n]){
                this.points = this.points + 10;
            }
        }
    }
  }
