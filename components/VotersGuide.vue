<template>
  <div>
    <h2 class="text-center h4">
      {{ $t('guide_title') }}
    </h2>
    <p>
      La alegerile parlamentare își exercită dreptul de vot în afara țării doar
      cetățenii români cu domiciliul sau reședința în străinătate. Află ce ai de
      făcut pentru a putea vota în țara în care ai domiciliu sau reședința la
      alegerile parlamentare din 6 decembrie 2020.
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
          <p class="my-0" v-html="$t(decisionTree[option].text)"></p>
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
        options: ['10'],
      },
      1: {
        id: '1',
        text: 'votersGuide.label1',
        options: ['11'],
      },
      10: {
        id: '10',
        text: 'votersGuide.label10',
      },
      11: {
        id: '11',
        text: 'votersGuide.label11',
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
