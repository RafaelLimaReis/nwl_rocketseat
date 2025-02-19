import { InputField, InputIcon, InputRoot } from '@/app/components/input'
import type { Meta, StoryObj } from '@storybook/react'
import { Mail } from 'lucide-react'

const meta: Meta<typeof InputRoot> = {
    title: 'Components/Input',
    tags: ['autodocs'],
    component: InputRoot,
    argTypes: {
        children: {
            description: `O children deve ser composto por:
            - 'InputIcon' e 'InputField' (para incluir ícone dentro do input) ou
            - apenas 'InputField' (para um input sem ícone).
            
            Se incluir o 'InputIcon', ele deve ser um ícone dentro do 'InputRoot'.`,
            table: {
                type: { summary: 'ReactNode' },
            },
        },
        error: {
            control: 'boolean',
            description: 'Aplica o estilo de erro no input, alterando a borda',
        },
    },
    parameters: {
        docs: {
            description: {
                component:
                    'Componente de input com suporte a ícones e controle de erro.',
            },
        },
    },
}

export default meta

export const Default: StoryObj<typeof InputRoot> = {
    args: {
        children: (
            <>
                <InputIcon>
                    <Mail />
                </InputIcon>
                <InputField type="email" placeholder="E-mail" />
            </>
        ),
    },
}

export const WithoutIcon: StoryObj<typeof InputRoot> = {
    args: {
        children: <InputField type="email" placeholder="E-mail" />,
    },
}

export const WithError: StoryObj<typeof InputRoot> = {
    args: {
        error: true,
        children: (
            <>
                <InputIcon>
                    <Mail />
                </InputIcon>
                <InputField type="email" placeholder="E-mail" />
            </>
        ),
    },
}
