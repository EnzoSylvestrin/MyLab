import { ExpandCard } from './ContainerExpand/ExpandCard';

export const ToggleBar = () => {
    return (
        <div className="flex flex-col gap-5 w-52 h-full fixed p-4 bg-grayMain dark:bg-blackMain scroll-auto">
            <ExpandCard 
                title={{text: 'Física'}} 
                subTitles={[
                    {text: 'Elétrica'}, 
                    {text: 'Óptica'}
                ]}
            />
            <ExpandCard 
                title={{text: 'Matemática'}} 
                subTitles={[
                    {text: 'Reais'}, 
                    {text: 'Imaginários'}, 
                    {text: 'Trigonometria'}, 
                    {text: 'Matrizes'}
                ]}
            />
            <ExpandCard 
                title={{text: 'Programação'}} 
                subTitles={[
                    {text: 'JavaScript'}, 
                    {text: 'C#'}, 
                    {text: 'Python'}
                ]}
            />
        </div>
    );
}