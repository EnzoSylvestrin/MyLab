import { useState } from 'react';

import * as Collapsible from '@radix-ui/react-collapsible';

import { IconType } from 'react-icons/lib';
import { RxCaretRight, RxCaretDown } from 'react-icons/rx';

import { motion } from 'framer-motion';

import { Text } from '@/Components/Text/Text';
import { Icon } from '@/Components/Icon/Icon';

type CardItem = {
    link?: string,
    text: string,
    Icon?: IconType,
}

type ExpandCardProps = {
    title: CardItem,
    subTitles: CardItem[],
}

export const ExpandCard = ({ title, subTitles }: ExpandCardProps) => {

    const [open, setOpen] = useState(false);

    const IconSize = 24;

    return (
        <Collapsible.Root className='w-full' open={open} onOpenChange={setOpen}>
            <Collapsible.Trigger asChild>
                <div className='cursor-pointer flex items-center justify-between'>
                    <TitleContainer item={title} />
                    <button className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-blackMain shadow-md data-[state=closed]:bg-grayMain transition-colors duration-150 dark:data-[state=closed]:bg-blackMain dark:text-grayMain">
                        <motion.div
                            initial={{rotate: 0}}
                            animate={{ rotate: open ? 90 : 0}}
                            transition={{ duration: 0.6, type: "spring" }}
                        >
                            <RxCaretRight 
                                size={IconSize}
                                
                            />
                        </motion.div>
                    </button>
                </div>
            </Collapsible.Trigger>
            <motion.div
                className='overflow-hidden'
                initial={{ height: 0 }}
                animate={{ height: open ? 'auto' : 0 }}
                transition={{ duration: 0.6, type: "spring", }}
            >
                <div className='flex flex-col items-center pl-1 border-l-[1px] border-l-secondary mt-2'>
                    {subTitles.map((subTitle) => {
                        return (
                            <div className='w-full p-1 hover:bg-[rgba(10,_10,_10,_0.35)]' key={subTitle.link}>
                                <TitleContainer item={subTitle} />
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </Collapsible.Root>
    );
}

const TitleContainer = ({ item }: { item: CardItem }) => {
    return (
        <div className='flex gap-1 items-center'>
            {
                item.Icon != null
                    ?
                    <Icon icon={item.Icon} size={20} colored />
                    :
                    ''
            }
            <Text size={item.link != null ? 'sm' : 'lg'}>
                {item.text}
            </Text>
        </div>
    );
}