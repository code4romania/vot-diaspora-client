<template>
  <div>
    <h2 class="text-center h4">
      {{ $t('guide_title') }}
    </h2>
    <p>
      {{ $t('guide_text') }}
    </p>
    <div
      class="d-flex flex-column flex-sm-row justify-content-center align-items-center align-items-sm-stretch mt-3"
    >
      <div
        v-for="option in initial.options"
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
      v-if="previousChoice.length"
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
    previousChoice: [],
    initial: { options: [0, 1] },
    decisionTree: {
      0: {
        id: '0',
        text: 'votersGuide.label0',
        options: ['11', '12'],
      },
      1: {
        id: '1',
        text: 'votersGuide.label1',
        options: ['10'],
      },
      10: {
        id: '10',
        text: 'votersGuide.label10',
      },
      11: {
        id: '11',
        text: 'votersGuide.label11',
        options: ['111', '112'],
      },
      111: {
        id: '111',
        text: 'votersGuide.label111',
        options: ['1110'],
      },
      1110: {
        id: '1110',
        text: 'votersGuide.label1110',
      },
      112: {
        id: '112',
        text: 'votersGuide.label112',
        options: ['1120'],
      },
      1120: {
        id: '1120',
        text: 'votersGuide.label1120',
      },
      12: {
        id: '12',
        text: 'votersGuide.label12',
        options: ['121', '122'],
      },
      121: {
        id: '121',
        text: 'votersGuide.label121',
        options: ['1210'],
      },
      1210: {
        id: '1210',
        text: 'votersGuide.label1210',
      },
      122: {
        id: '122',
        text: 'votersGuide.label122',
        options: ['1220'],
      },
      1220: {
        id: '1220',
        text: 'votersGuide.label1220',
      },
    },
  }),
  methods: {
    goToPreviousChoice() {
      const previousOption = this.previousChoice.pop()
      this.initial.options = previousOption
    },
    goToNextChoice(option) {
      if (!this.decisionTree[option].options) {
        return
      }
      this.previousChoice.push(this.initial.options)
      this.initial.options = this.decisionTree[option].options
    },
    resetTest() {
      this.previousChoice = []
      this.initial.options = ['0', '1']
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
