import data from '../../store/questionStore.json'

export default {
    data () {
      return {
          questionNumber: 1,            // integer
          userAnswers: [],              // array
          questions: data.questions     // array
      }
    },
    methods: {
        // push answer into userAnswers array
        answerClicked(index) {
            this.userAnswers.push(index);
            this.questionNumber++;
        }
    },
    watch: {
        // if questionNumber reaches number of questions, navigate to result page
        questionNumber() {
            if(this.questionNumber === this.questions.length + 1) {
                this.$router.push({ name: 'result', params: {userAnswer: this.userAnswers}});
            }
        }
    }
  }
