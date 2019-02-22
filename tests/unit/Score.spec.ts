import { shallowMount, Wrapper } from '@vue/test-utils'
import Score from '@/components/Score.vue'

describe('Score.vue', () => {
  let wrapper: Wrapper<any>
  beforeEach(function () {
    wrapper = shallowMount(Score)
  })

  it('should render the score template correctly', function () {
    expect(wrapper.element).toMatchSnapshot()
  });

  describe('the increment button', function () {
    const increment = jest.fn()
    wrapper.setMethods({ increment })
    const el = wrapper.find
    wrapper.vm.
    it('should call the increment method and emit the increment event', function () {

    });
  });

})
