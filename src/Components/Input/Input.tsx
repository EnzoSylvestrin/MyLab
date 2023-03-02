import { InputHTMLAttributes, ReactNode } from 'react';

import { IconType } from 'react-icons/lib';

import { Icon } from '../Icon/Icon';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface InputRootProps {
    children: ReactNode,
}

function InputRoot({children} : InputRootProps) {
    return (
        <div className='flex items-center gap-2 py-4 px-3 rounded w-full h-12 bg-gray-200 text-xs placeholder:text-gray-400 focus-within:ring-2 ring-secondary dark:bg-gray-800'>
            {children}
        </div>
    );
}

InputRoot.displayName = 'Input.Root';

export interface IconProps {
    icon: IconType,
    colored?: boolean,
}

function InputIcon({icon, colored} : IconProps) {
    return (
        <Icon icon={icon} colored={colored} />
    )
}

InputIcon.displayName = 'Input.Icon'

export interface InputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function InputInput({...props} : InputInputProps) {
    return (
        <input 
            className='bg-transparent flex-1 caret-secondary text-darkColor text-xs outline-none placeholder:text-gray-400 dark:text-lightColor'
            {...props}
        />
    )
}

InputInput.displayName = 'Input.Input'

export const Input = {
    Root: InputRoot,
    Icon: InputIcon,
    Input: InputInput
}