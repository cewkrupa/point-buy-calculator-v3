/* eslint no-unused-vars: "off" */
import { shallowMount, Wrapper } from '@vue/test-utils'
import Score from '@/components/Score.vue'

describe('Score.vue', () => {
  let wrapper: Wrapper<any>
  beforeEach(function () {
    wrapper = shallowMount(Score)
  })

  it('should render the score template correctly', function () {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should emit an increment event when the increment method is called', () => {
    wrapper.vm.increment()
    expect(wrapper.emitted().increment).toBeTruthy()
  })

  it('should emit a decrement event when the decrement method is called', () => {
    wrapper.vm.decrement()
    expect(wrapper.emitted().decrement).toBeTruthy()
  })
})
