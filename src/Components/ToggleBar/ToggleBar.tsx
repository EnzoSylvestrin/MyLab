import { motion } from 'framer-motion';

import { useDispatch, useSelector } from 'react-redux';

import { RootState, open as Open, close } from '../../stores/MenuStore';

import { ExpandCard } from './ContainerExpand/ExpandCard';

import { TbMathFunction } from 'react-icons/tb';
import { BiAtom, BiMenu, BiX } from 'react-icons/bi';
import { HiCode } from 'react-icons/hi';
import { FcElectricity } from 'react-icons/fc';

import { Icon } from '../Icon/Icon';
import { ANIMATION_TYPE, DURATION_ANIMATION } from '@/Utils/Contants';

export const ToggleBar = () => {

    const open = useSelector((state: RootState) => state.isContextMenuOpen);
    const dispatch = useDispatch();

    const HandleToogleMenu = () => {
        open ? dispatch(close()) : dispatch(Open());
    }

    return (
        <>
            <motion.div
                className="flex flex-col gap-5 w-60 h-[calc(100vh_-_64px)] fixed p-4 mt-[63px] z-10  overflow-y-scroll border-r-[1px] border-r-secondary transition-colors duration-300 shadow-lg bg-grayMain dark:bg-darkMain"
                animate={{
                    translateX: open ? '0' : '-240px',
                }}
                transition={{
                    duration: DURATION_ANIMATION,
                    type: ANIMATION_TYPE,
                }}
            >
                <ExpandCard
                    title={{ text: 'Física', Icon: BiAtom }}
                    subTitles={[
                        { text: 'Elétrica', link: 'eletrica', Icon: FcElectricity },
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
            </motion.div>
            <motion.div
                className='fixed flex items-center justify-center rounded-full z-[999] top-[70px] p-1 bg-cyan-200 cursor-pointer dark:bg-secondary '
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
            >
                <Icon icon={open ? BiX : BiMenu} size={20} />
            </motion.div>
        </>
    );
}