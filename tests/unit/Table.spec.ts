import { shallowMount, Wrapper } from '@vue/test-utils'
import Table from '@/components/Table.vue'

describe('Table.vue', () => {
  let wrapper: Wrapper<any>
  beforeEach(function () {
    wrapper = shallowMount(Table)
  })

  it('should render the table correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render the ability scores and the ability rows', () => {
    const columnCount = 5
    const rowCount = 6

    let columns = wrapper.find('.table-headers')
    let rows = wrapper.find('.ability-rows')

    expect(columns.element.childElementCount).toBe(columnCount)
    expect(rows.element.childElementCount).toBe(rowCount)
  })

  it('should change the score when an update score event is received', () => {
    let initialScore = 4;
    let updatedScore = 69
    wrapper.setData({
      abilities: [
        {
          'name': 'TestAbility',
          'score': initialScore,
          'modifier': 5,
          'cost': 0
        }
      ]

    })

    wrapper.find('.row').vm.$emit('update:score', updatedScore)
    expect(wrapper.vm.$data.abilities[0].score).toBe(updatedScore);
  })


})
