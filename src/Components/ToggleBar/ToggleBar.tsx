import { ExpandCard } from './ContainerExpand/ExpandCard';

export const ToggleBar = () => {
    return (
        <div className="flex flex-col gap-5 w-52 h-full fixed p-4 bg-grayMain dark:bg-blackMain scroll-auto">
            <ExpandCard title='Física' subTitles={['Elétrica', 'Óptica']}/>
            <ExpandCard title='Matemática' subTitles={['Reais', 'Imaginários', 'Trigonometria', 'Matrizes']}/>
            <ExpandCard title='Programação' subTitles={['JavaScript', 'C#', 'Python']}/>
        </div>
    );
}