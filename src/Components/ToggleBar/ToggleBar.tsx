import { ExpandCard } from './ContainerExpand/ExpandCard';

export const ToggleBar = () => {
    return (
        <div className="flex flex-col gap-5 w-52 h-full fixed p-4 bg-grayMain dark:bg-blackMain scroll-auto">
            <ExpandCard 
                title={{text: 'Física'}} 
                subTitles={[
                    {text: 'Elétrica', link: 'eletrica'}, 
                    {text: 'Óptica', link: 'optica'}
                ]}
            />
            <ExpandCard 
                title={{text: 'Matemática'}} 
                subTitles={[
                    {text: 'Reais', link: 'reais'}, 
                    {text: 'Imaginários', link: 'imaginarios'}, 
                    {text: 'Trigonometria', link: 'trigonometria'}, 
                    {text: 'Matrizes', link: 'matrizes'}
                ]}
            />
            <ExpandCard 
                title={{text: 'Programação'}} 
                subTitles={[
                    {text: 'JavaScript' , link: 'javascript'}, 
                    {text: 'C#', link: 'csharp'}, 
                    {text: 'Python', link: 'python'}
                ]}
            />
        </div>
    );
}