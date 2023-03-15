import { useState } from 'react';

import * as Collapsible from '@radix-ui/react-collapsible';

import { IconType } from 'react-icons/lib';
import { RxCaretRight } from 'react-icons/rx';

import { motion } from 'framer-motion';

import { Text } from '@/Components/Text/Text';
import { Icon } from '@/Components/Icon/Icon';

import Link from 'next/link';
import { ANIMATION_TYPE, DURATION_ANIMATION } from '@/Utils/Contants';

type CardItem = {
    link: string,
    text: string,
    Icon?: IconType,
}

type CardTitle = {
    link?: string,
    text: string,
    Icon?: IconType,
}

type ExpandCardProps = {
    title: CardTitle,
    subTitles: CardItem[],
}

export const ExpandCard = ({ title, subTitles }: ExpandCardProps) => {

    const [open, setOpen] = useState(false);

    const IconSize = 24;

    return (
        <Collapsible.Root className='w-full' open={open} onOpenChange={setOpen}>
            <Collapsible.Trigger asChild>
                <div
                    className='cursor-pointer flex items-center justify-between'
                    data-testid='collapsiable'
                >
                    <TitleContainer item={title} />
                    <button className="h-[25px] w-[25px] inline-flex items-center justify-center text-darkMain transition-colors duration-150 dark:text-grayMain">
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: open ? 90 : 0 }}
                            transition={{ duration: DURATION_ANIMATION, type: ANIMATION_TYPE }}
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
                transition={{ duration: DURATION_ANIMATION, type: ANIMATION_TYPE, }}
                data-testid="menuItens"
            >
                <div className='flex flex-col items-center border-l border-slate-300 dark:border-slate-600 mt-2'>
                    {subTitles.map((subTitle) => {
                        return (
                            subTitle.link != null
                                ?
                                <Link href={subTitle.link} className="w-full h-full flex-1 p-1 -ml-[2px] border-transparent hover:border-current hover:bg-lightHover pl-2 border-l mt-1 hover:border-l-secondary dark:hover:bg-darkHover first:mt-0" key={subTitle.link}>
                                    <TitleContainer item={subTitle} />
                                </Link>
                                :
                                <div className='w-full p-1 -ml-[2px] border-transparent hover:border-current hover:bg-lightHover pl-2 border-l mt-1 hover:border-l-secondary dark:hover:bg-darkHover first:mt-0' key={subTitle.link}>
                                    <TitleContainer item={subTitle} />
                                </div>
                        );
                    })}
                </div>
            </motion.div>
        </Collapsible.Root>
    );
}

const TitleContainer = ({ item }: { item: CardItem | CardTitle }) => {
    return (
        <>
            {
                item.link == null
                    ?
                    <div className='flex gap-1 items-center'>
                        {
                            item.Icon != null
                                ?
                                <Icon icon={item.Icon} size={20} colored />
                                :
                                ''
                        }
                        <Text size={'lg'}>
                            {item.text}
                        </Text>
                    </div>
                    :
                    <div className='flex gap-1 items-center'>
                        {
                            item.Icon != null
                                ?
                                <Icon icon={item.Icon} size={20} colored />
                                :
                                ''
                        }
                        <Text size={'sm'}>
                            {item.text}
                        </Text>
                    </div>
            }
        </>
    );
}