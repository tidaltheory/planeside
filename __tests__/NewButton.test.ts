import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import NewButton from '~/components/NewButton.vue'

describe('NewButton', () => {
	it('renders', async () => {
		const handleClick = vi.fn()
		const wrapper = mount(NewButton, { props: { onclick: handleClick } })

		expect(wrapper.text()).toBe('Drop in')

		await wrapper.get('button').trigger('click')

		expect(handleClick).toBeCalledTimes(1)
	})
})
