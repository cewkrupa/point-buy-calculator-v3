import { mount } from '@vue/test-utils'
import Row from '@/components/Row.vue'

describe('Row.vue', () => {
  it('renders the row elements when passed as props', () => {
    const name = 'Strength'
    const score = 8
    const pointCost = 0
    const modifier = -1
    const wrapper = mount(Row, {
      propsData: {
        name,
        score,
        pointCost,
        modifier
      }
    })
    console.log(wrapper.attributes())
    expect(wrapper.text()).toContain(name)
    expect(wrapper.text()).toContain(score)
    expect(wrapper.text()).toContain(pointCost)
    expect(wrapper.text()).toContain(modifier)
  })
})
