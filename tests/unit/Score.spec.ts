/* eslint no-unused-vars: "off" */
import { shallowMount, Wrapper } from '@vue/test-utils'
import Score from '@/components/Score.vue'

describe('Score.vue', () => {
  let wrapper: Wrapper<any>
  beforeEach(function () {
    wrapper = shallowMount(Score, { propsData: { score: 8 } })
  })

  it('should render the score template correctly', function () {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should take in the score as a prop and render it', () => {
    let score = 7
    let propsWrapper = shallowMount(Score, { propsData: { score: score } })
    expect(propsWrapper.find('.score').text()).toContain(score.toString())
  })

  it('should emit an update score event with the incremented score when the increment button is clicked', () => {
    let originalScore = wrapper.props().score
    wrapper.find('.score-increment').trigger('click')
    expect(wrapper.emitted('update:score')).toBeTruthy()
    expect(wrapper.emitted('update:score')[0][0]).toBe(originalScore + 1)
  })

  it('should emit a update score event with the decremented score when the decrement button is clicked', () => {
    let originalScore = wrapper.props().score
    wrapper.find('.score-decrement').trigger('click')
    expect(wrapper.emitted('update:score')).toBeTruthy()
    expect(wrapper.emitted('update:score')[0][0]).toBe(originalScore - 1)
  })
})
