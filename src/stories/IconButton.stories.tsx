import { IconButton } from '@/app/components/icon-button'
import type { Meta, StoryObj } from '@storybook/react'
import { ArrowRight, Copy } from 'lucide-react'

const meta: Meta<typeof IconButton> = {
    title: 'Components/Icon Button',
    component: IconButton,
    argTypes: {
        onClick: { action: 'clicked' },
        disabled: { control: 'boolean' },
        children: {
            description: 'Um icone para renderizar do tamanho necessário.',
            control: false,
            table: {
                type: { summary: 'ReactNode' },
            },
        },
    },
    args: {
        disabled: false,
    },
}

export default meta

type Story = StoryObj<typeof IconButton>

export const WithIcon: Story = {
    args: {
        children: <Copy />,
    },
}

export const Disabled: Story = {
    args: {
        children: <Copy />,
        disabled: true,
    },
}
