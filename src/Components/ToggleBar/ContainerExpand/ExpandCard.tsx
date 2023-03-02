import * as Collapsible from '@radix-ui/react-collapsible';


import { RxCaretRight, RxCaretDown } from 'react-icons/rx'; 

import { useState } from 'react';
import { Heading } from '@/Components/Heading/Heading';
import { Link } from '@/Components/Link/Link';
import { Text } from '@/Components/Text/Text';

type ExpandCardProps = {
    title: string,
    subTitles: string[],
}

export const ExpandCard = ({title, subTitles} : ExpandCardProps) => {

    const [open, setOpen] = useState(false);

    const IconSize = 24;

    return (
        <Collapsible.Root className='w-full' open={open} onOpenChange={setOpen}>
            <div className='flex items-center justify-between'>
                <Heading size='sm' className="leading-[25px]">
                    {title}
                </Heading>
                <Collapsible.Trigger asChild>
                    <button className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-blackMain shadow-md data-[state=closed]:bg-grayMain transition-colors duration-150 dark:data-[state=closed]:bg-blackMain dark:text-grayMain">
                        {open ? <RxCaretDown size={IconSize} /> : <RxCaretRight size={IconSize} />}
                    </button>
                </Collapsible.Trigger>
            </div>
            <Collapsible.Content>
                <div className='flex flex-col items-center pl-2 border-l-[1px] border-l-secondary mt-1'>
                    {
                        subTitles.map(subTitle => {
                            return (
                                <div className='cursor-pointer w-full p-1 hover:bg-[rgba(10,_10,_10,_0.35)]'>
                                    <Text>{subTitle}</Text>
                                </div>
                            )
                        })
                    }
                </div>
            </Collapsible.Content>
        </Collapsible.Root>
    );
}