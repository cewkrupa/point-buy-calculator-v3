import { mount } from '@vue/test-utils'
import Row from '@/components/Row.vue'

describe('Row.vue', () => {
  it('renders the row elements when passed as props', () => {
    const name = 'Strength'
    const score = 8
    const pointCost = 0
    const modifier = -1
    const propsWrapper = mount(Row, {
      propsData: {
        name,
        score,
        pointCost,
        modifier
      }
    })
    expect(propsWrapper.text()).toContain(name)
    expect(propsWrapper.text()).toContain(score)
    expect(propsWrapper.text()).toContain(pointCost)
    expect(propsWrapper.text()).toContain(modifier)
  })

  it('should emit an update score event when the score is updated in the score component', () => {
    const wrapper = mount(Row, {
      propsData: {
        name: 'test',
        score: 4,
        pointCost: 0,
        modifier: 0
      }
    })

    wrapper.find('.score-increment').trigger('click')
    wrapper.find('.score-decrement').trigger('click')

    expect(wrapper.emitted('update:score').length).toBe(2)
  })

  it('should emit a reset score event when the reset button is clicked', () => {
    const wrapper = mount(Row, {
      propsData: {
        name: 'test',
        score: 4,
        pointCost: 0,
        modifier: 0
      }
    })

    wrapper.find('.reset-button').trigger('click')
    expect(wrapper.emitted()['reset:score']).toBeTruthy()
  })
})
