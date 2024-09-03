import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'

import { LoginForm } from './AuthForm'

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: 'Components/AuthForm',
  parameters: {
    chromatic: {
      forcedColors: 'none',
      prefersReducedMotion: 'no-preference',
    },
  },
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const WithForcedColors: Story = {
  parameters: {
    chromatic: {
      forcedColors: 'active',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const email = 'test@email.com'
    const password = 'password'
    await userEvent.type(canvas.getByLabelText('Email'), email)
    await userEvent.type(canvas.getByLabelText('Password'), password)
    await canvas.getByRole('button', { name: 'Login' }).click()
  },
}

export const WithReducedMotion: Story = {
  parameters: {
    chromatic: {
      prefersReducedMotion: 'reduce',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const email = 'test@email.com'
    const password = 'password'
    await userEvent.type(canvas.getByLabelText('Email'), email)
    await userEvent.type(canvas.getByLabelText('Password'), password)
    await canvas.getByRole('button', { name: 'Login' }).click()
  },
}
