import { Button } from '@/app/components/button'
import type { Meta, StoryObj } from '@storybook/react'
import { ArrowRight } from 'lucide-react'

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
        disabled: { control: 'boolean' },
        children: {
            description:
                'Qualquer elemento/texto que sera renderizado dentro do botão',
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

type Story = StoryObj<typeof Button>

export const WithOnlyText: Story = {
    args: {
        children: 'Clique Aqui',
    },
}

export const WithIconAndReactNode: Story = {
    args: {
        children: (
            <>
                Confirmar
                <ArrowRight />
            </>
        ),
    },
}

export const disabled: Story = {
    args: {
        children: 'Clique Aqui',
        disabled: true,
    },
}
