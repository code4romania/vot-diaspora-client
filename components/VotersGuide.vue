<template>
  <div ref="decisionTree">
    <h2 class="text-center h4">
      {{ $t('guide_title') }}
    </h2>
    <div v-if="decisionTree[currentNode].details">
      <p v-html="$t(decisionTree[currentNode].details)"></p>
    </div>
    <div
      class="d-flex flex-column flex-sm-row justify-content-center align-items-center align-items-sm-stretch mt-3"
    >
      <div
        v-for="option in decisionTree[currentNode].options"
        :key="option"
        class="card"
        :class="{
          'choice-card text-center my-2 mx-0 mx-sm-2 font-weight-bolder':
            decisionTree[option].options,
        }"
        @click="goToNextChoice(option)"
      >
        <div class="card-body d-flex align-items-center justify-content-center">
          <div v-html="$t(decisionTree[option].text)"></div>
        </div>
      </div>
    </div>
    <div
      v-if="previousChoices.length > 1"
      class="d-flex justify-content-between my-4"
    >
      <button class="btn btn-light" @click="resetTest()">
        {{ $t('back_to_start_button') }}
      </button>
      <button class="btn btn-light" @click="goToPreviousChoice()">
        {{ $t('back_button') }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    currentNode: 'START',
    previousChoices: ['START'],
    decisionTree: {
      START: {
        id: 'START',
        text: '',
        options: ['A', 'B'],
      },
      A: {
        id: 'A',
        text: 'votersGuide.option_a_text',
        options: ['AA', 'AB', 'AC'],
      },
      AA: {
        id: 'AA',
        text: 'votersGuide.option_aa_text',
        options: ['AAR'],
      },
      AAR: {
        id: 'AAR',
        text: 'votersGuide.text_aar',
      },
      AB: {
        id: 'AB',
        text: 'votersGuide.option_ab_text',
        options: ['ABR'],
      },
      ABR: {
        id: 'ABR',
        text: 'votersGuide.text_abr',
      },
      AC: {
        id: 'AC',
        text: 'votersGuide.option_ac_text',
        options: ['ACR'],
      },
      ACR: {
        id: 'ACR',
        text: 'votersGuide.text_acr',
      },

      B: {
        id: 'B',
        text: 'votersGuide.option_b_text',
        options: ['BR'],
      },

      BR: {
        id: 'BR',
        text: 'votersGuide.text_br',
      },
    },
  }),
  methods: {
    scrollToDecisionTree() {
      this.$nextTick(() =>
        this.$refs.decisionTree.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      )
    },
    goToPreviousChoice() {
      // remove current option
      this.previousChoices.pop()
      this.currentNode = this.previousChoices[this.previousChoices.length - 1]
      this.scrollToDecisionTree()
    },
    goToNextChoice(option) {
      if (!this.decisionTree[option].options) {
        return
      }

      this.currentNode = option
      this.previousChoices.push(option)
    },
    resetTest() {
      this.previousChoices = ['START']
      this.currentNode = 'START'
      this.scrollToDecisionTree()
    },
  },
}
</script>

<style scoped>
.choice-card {
  max-width: 18rem;
  width: 100%;
  border: 2px solid #352245;
  transition: 0.2s border;
  position: relative;
  overflow: hidden;
}
.choice-card::before {
  content: '';
  opacity: 0;
  background: #352245;
  position: absolute;
  top: -25px;
  right: -25px;
  width: 50px;
  height: 50px;
  transform: rotate(45deg);
  transition: 0.3s opacity;
}
.choice-card::after {
  content: '';
  opacity: 0;
  background: no-repeat url(../assets/check-on.svg);
  background-size: cover;
  position: absolute;
  top: -2px;
  right: -2px;
  width: 25px;
  height: 25px;
  transition: 0.3s opacity;
}
.choice-card:hover::before,
.choice-card:hover::after {
  opacity: 1;
}
.choice-card:hover {
  cursor: pointer;
  border: 2px solid #fc0;
}
</style>
