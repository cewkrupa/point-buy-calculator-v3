import {shallowMount, Wrapper} from '@vue/test-utils'
import Score from '@/components/Score.vue'

describe('Score.vue', () => {
  let wrapper: Wrapper<any>
  beforeEach(function () {
    wrapper = shallowMount(Score)
  })

  it('should render the score element', () => {
    expect(wrapper.text()).toContain(8)
  })
})
