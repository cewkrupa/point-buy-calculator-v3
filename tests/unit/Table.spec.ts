import { shallowMount, Wrapper } from '@vue/test-utils'
import Table from '@/components/Table.vue'

describe('Table.vue', () => {
  let wrapper: Wrapper<any>
  const abilities = [
    {
      name: 'TestAbility',
      score: 69,
      pointCost: 42,
      modifier: -12
    },
    {
      name: 'Postmodernism',
      score: 123,
      pointCost: 5,
      modifier: 37
    }
  ]
  const baseScore = 8
  beforeEach(function () {
    wrapper = shallowMount(Table, {
      propsData: {
        abilityArray: abilities,
        baseScore: baseScore
      }
    })
  })

  it('should render the table correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render the ability scores and the ability rows', () => {
    const columnCount = 5
    const rowCount = abilities.length

    let columns = wrapper.find('.table-headers')
    let rows = wrapper.find('.ability-rows')

    expect(columns.element.childElementCount).toBe(columnCount)
    expect(rows.element.childElementCount).toBe(rowCount)
  })

  it('should change the score when an update score event is received', () => {
    let updatedScore = 1234

    wrapper.find('.row').vm.$emit('update:score', updatedScore)
    expect(wrapper.vm.$props.abilityArray[0].score).toBe(updatedScore)
  })

  it('should reset the score when a reset score event is received', () => {
    let initialScore = abilities[0].score
    wrapper.find('.row').vm.$emit('reset:score')
    expect(abilities[0].score).toBe(baseScore)
  })
})
