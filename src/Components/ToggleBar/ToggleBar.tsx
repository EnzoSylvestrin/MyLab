import { motion } from 'framer-motion';

import clsx from 'clsx';

import { useDispatch, useSelector } from 'react-redux';

import { BiAtom, BiMenu, BiX } from 'react-icons/bi';
import { TbMathFunction } from 'react-icons/tb';
import { HiCode } from 'react-icons/hi';
import { IoMdFlash } from 'react-icons/io';

import { ANIMATION_TYPE, DURATION_ANIMATION } from '@/Utils/Contants';

import { useIsMedium } from '@/Hooks/UseMediaQuery';

import { RootState, openMenu as Open, closeMenu } from '../../stores/MenuStore';

import { ExpandCard } from './ContainerExpand/ExpandCard';
import { Icon } from '../Icon/Icon';


export const ToggleBar = () => {

    const open = useSelector((state: RootState) => state.menu.isContextMenuOpen);
    const dispatch = useDispatch();

    const IsMedium = useIsMedium();

    const HandleToogleMenu = () => {
        open ? dispatch(closeMenu()) : dispatch(Open());
    }

    return (
        <>
            <motion.div
                className={clsx(
                    'p-4 bg-grayMain dark:bg-darkMain transition-colors duration-300',
                    'md:fixed md:overflow-y-scroll md:m-0 md:w-60 md:z-20 md:border-r-[1px]',
                    'md:border-r-secondary md:p-0 md:-mt-[1px] md:h-[calc(100vh_-_64px)]'
                )}
                animate={{
                    translateX: open ? '0' : !IsMedium ? '0' : '-240px',
                }}
                transition={{
                    duration: !IsMedium ? 0 : DURATION_ANIMATION,
                    type: ANIMATION_TYPE,
                }}
                data-testid={'menubar'}
            >
                <div
                    className={clsx(
                        "flex flex-col gap-5 w-full p-4 shadow-lg md:h-full",
                    )}
                >
                    <ExpandCard
                        title={{ text: 'Física', Icon: BiAtom }}
                        subTitles={[
                            { text: 'Elétrica', link: 'eletrica', Icon: IoMdFlash },
                            { text: 'Óptica', link: 'optica' }
                        ]}
                    />
                    <ExpandCard
                        title={{ text: 'Matemática', Icon: TbMathFunction }}
                        subTitles={[
                            { text: 'Reais', link: 'reais' },
                            { text: 'Imaginários', link: 'imaginarios' },
                            { text: 'Trigonometria', link: 'trigonometria' },
                            { text: 'Matrizes', link: 'matrizes' }
                        ]}
                    />
                    <ExpandCard
                        title={{ text: 'Programação', Icon: HiCode }}
                        subTitles={[
                            { text: 'JavaScript', link: 'javascript' },
                            { text: 'C#', link: 'csharp' },
                            { text: 'Python', link: 'python' }
                        ]}
                    />
                </div>
            </motion.div>
            <motion.div
                className={clsx(
                    'hidden fixed items-center justify-center rounded-full z-[999] top-[70px]',
                    'p-1 bg-purple-500 cursor-pointer dark:bg-secondary',
                    'md:flex'
                )}
                onClick={HandleToogleMenu}
                initial={{
                    left: '248px'
                }}
                animate={{
                    left: open ? '248px' : '8px'
                }}
                transition={{
                    duration: DURATION_ANIMATION,
                    type: ANIMATION_TYPE,
                }}
                data-testid="closeButton"
            >
                <Icon icon={open ? BiX : BiMenu} size={20} className="!fill-gray-50" useDarkMode={false} />
            </motion.div>
        </>
    );
}