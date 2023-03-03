import { ExpandCard } from './ContainerExpand/ExpandCard';

import { TbMathFunction } from 'react-icons/tb';
import { BiAtom } from 'react-icons/bi';
import { HiCode } from 'react-icons/hi';

export const ToggleBar = () => {
    return (
        <div className="flex flex-col gap-5 w-56 h-[92vh] fixed p-4 mt-[8vh] bg-grayMain dark:bg-blackMain overflow-y-scroll border-r-[1px] border-r-secondary">
            <ExpandCard
                title={{text: 'Física', Icon: BiAtom}} 
                subTitles={[
                    {text: 'Elétrica', link: 'eletrica'}, 
                    {text: 'Óptica', link: 'optica'}
                ]}
            />
            <ExpandCard
                title={{text: 'Matemática', Icon: TbMathFunction}} 
                subTitles={[
                    {text: 'Reais', link: 'reais'}, 
                    {text: 'Imaginários', link: 'imaginarios'}, 
                    {text: 'Trigonometria', link: 'trigonometria'}, 
                    {text: 'Matrizes', link: 'matrizes'}
                ]}
            />
            <ExpandCard
                title={{text: 'Programação', Icon: HiCode}} 
                subTitles={[
                    {text: 'JavaScript' , link: 'javascript'}, 
                    {text: 'C#', link: 'csharp'}, 
                    {text: 'Python', link: 'python'}
                ]}
            />
        </div>
    );
}