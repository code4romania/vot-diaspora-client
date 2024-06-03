<template>
  <div>
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
        options: ['A1', 'A2', 'A3'],
      },
      A1: {
        id: 'A1',
        text: 'votersGuide.label_a1',
        details: 'votersGuide.label_a1_details',
        options: ['A1B1', 'A1B2'],
      },
      A1B1: {
        id: 'A1B1',
        text: 'votersGuide.label_a1b1',
        details: 'votersGuide.label_a1b1_details',
        options: ['A1B1C1', 'A1B1C2'],
      },
      A1B1C1: {
        id: 'A1B1C1',
        text: 'votersGuide.label_a1b1c1',
        details: 'votersGuide.label_a1b1c1_details',
        options: ['A1B1C1D1', 'A1B1C1D2'],
      },
      A1B1C1D1: {
        id: 'A1B1C1D1',
        text: 'votersGuide.label_a1b1c1d1',
        options: ['A1B1C1D1R'],
      },
      A1B1C1D1R: {
        id: 'A1B1C1D1R',
        text: 'votersGuide.label_a1b1c1d1r',
      },
      A1B1C1D2: {
        id: 'A1B1C1D2',
        text: 'votersGuide.label_a1b1c1d2',
        options: ['A1B1C1D2R'],
      },
      A1B1C1D2R: {
        id: 'A1B1C1D2R',
        text: 'votersGuide.label_a1b1c1d2r',
      },
      A1B1C2: {
        id: 'A1B1C2',
        text: 'votersGuide.label_a1b1c2',
        options: ['A1B1C2R'],
      },
      A1B1C2R: {
        id: 'A1B1C2R',
        text: 'votersGuide.label_a1b1c2r',
      },
      A1B2: {
        id: 'A1B2',
        text: 'votersGuide.label_a1b2',
        details: 'votersGuide.label_a1b2_details',
        options: ['A1B1C1', 'A1B1C2'],
      },
      A2: {
        id: 'A2',
        text: 'votersGuide.label_a2',
        details: 'votersGuide.label_a2_details',
        options: ['A2B1', 'A2B2'],
      },
      A2B1: {
        id: 'A2B1',
        text: 'votersGuide.label_a2b1',
        details: 'votersGuide.label_a2b1_details',
        options: ['A2B1C1', 'A2B1C2'],
      },
      A2B1C1: {
        id: 'A2B1C1',
        text: 'votersGuide.label_a2b1c1',
        options: ['A2B1C1R'],
      },
      A2B1C2: {
        id: 'A2B1C2',
        text: 'votersGuide.label_a2b1c2',
        options: ['A2B1C2R'],
      },

      A2B1C1R: {
        id: 'A2B1C1R',
        text: 'votersGuide.label_a2b1c1r',
      },

      A2B1C2R: {
        id: 'A2B1C2R',
        text: 'votersGuide.label_a2b1c2r',
      },

      A2B2: {
        id: 'A2B2',
        text: 'votersGuide.label_a2b2',
        options: ['A2B2R'],
      },
      A2B2R: {
        id: 'A2B2R',
        text: 'votersGuide.label_a2b2r',
      },
      A3: {
        id: 'A3',
        text: 'votersGuide.label_a3',
        options: ['A3R'],
      },
      A3R: {
        id: 'A3R',
        text: 'votersGuide.label_a3r',
      },
    },
  }),
  methods: {
    goToPreviousChoice() {
      // remove current option
      this.previousChoices.pop()
      this.currentNode = this.previousChoices[this.previousChoices.length - 1]
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
