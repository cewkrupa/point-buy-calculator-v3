import { shallowMount, Wrapper } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  let wrapper: Wrapper<any>
  let baseScore: number,
    maxScore: number,
    minScore: number,
    baseCost: number,
    total: number,
    thresholdScore: number,
    thresholdInterval: number
  let abilities: Array<Object>
  let data: object

  beforeAll(() => {
    abilities = [
      {
        name: 'TestAbility',
        score: 8,
        cost: 0
      },
      {
        name: 'Postmodernism',
        score: 8,
        cost: 0
      }
    ]
    baseScore = 8
    maxScore = 15
    minScore = 5
    baseCost = 0
    total = 12
    thresholdInterval = 2
    thresholdScore = 12
    data = {
      abilityArray: abilities,
      baseScore: baseScore,
      maxScore: maxScore,
      minScore: minScore,
      baseCost: baseCost,
      total: total,
      thresholdInterval: thresholdInterval,
      thresholdScore: thresholdScore
    }
  })
  beforeEach(function () {
    wrapper = shallowMount(App)
    setData(wrapper, data)
  })

  describe('the stats bar', () => {
    it('should display remaining scores', async () => {
    })
    it('should display the sum of all scores', () => {})
  })
})

const setData = (w:Wrapper<any>, p: object): void => {
  w.setData(p)
}
