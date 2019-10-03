import { shallowMount, Wrapper } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  let wrapper: Wrapper<any>
  const abilities = [
    {
      name: 'TestAbility',
      score: 69,
      pointCost: 42
    },
    {
      name: 'Postmodernism',
      score: 123,
      pointCost: 5
    }
  ]
  const baseScore = 8
  const maxScore = 15
  const minScore = 5
  beforeEach(function () {
    wrapper = shallowMount(App, {
      propsData: {
        abilityArray: abilities,
        baseScore: baseScore,
        maxScore: maxScore,
        minScore: minScore
      }
    })
  })

  describe('the stats bar', () => {
    it('should display the sum of all scores', () => {})
  })
})
