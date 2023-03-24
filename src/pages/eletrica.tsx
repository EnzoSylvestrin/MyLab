import { Heading } from "@/Components/Heading/Heading";
import { Formula } from "@/Components/Formula/Formula";
import { Text } from "@/Components/Text/Text";
import { Table } from "@/Components/Table/Table";

const Eletrica = () => {

    const ItensEletrica = [
        'Variáveis',
        'Descrição',
        'I',
        'Tensão de corrente.',
        'V',
        'Diferença de potêncial elétrico (ddp)',
        'R',
        'Resistência de elétrica'
    ];

    return (
        <div className="flex items-center w-full transition-colors duration-300 bg-grayMain dark:bg-darkMain">
            <div className="w-full flex items-center justify-center flex-col">
                <Heading size="lg" className={'!text-secondary'}>
                    Física elétrica
                </Heading>
                <Text align="center" className={'text-slate-500 dark:text-slate-400'}>
                    Entenda o efeito das cargas elétricas sobre a matéria
                </Text>
                <div className="flex items-center justify-center w-full mt-4">
                    <div className="w-full border-r border-r-secondary px-2">
                        <Heading align="center">
                            Conceito:
                        </Heading>
                        <Text align="center" className={'mt-2 break-words w-full px-4'}>
                            O conceito de eletricidade é é abrangente, mas podemos compreendê-lo
                            como todos os efeitos que as cargas elétricas produzem sobre a matéria.
                            A eletricidade é comumente associada à corrente elétrica, uma movimentação de
                            cargas que é estabelecida quando algum corpo é submetido a uma diferença de
                            potencial elétrico.
                        </Text>
                        <Heading align="center" className={'mt-4'}>
                            Definições:
                        </Heading>
                        <Table gridTemplate="grid-cols-2" cols={2} className="my-4" Itens={ItensEletrica} />
                    </div>
                    <div className="w-full pl-2">
                        <Heading align="center">
                            Fórmulas:
                        </Heading>
                        <Heading align="center" size="sm" className={'mt-4'}>
                            1ª lei de OHM:
                        </Heading>
                        <Formula formula="R = V / I" />
                        <Text align="center" className={'mt-3'}>
                            Onde:<br />
                            R = Resistência elétrica(Ω)<br />
                            V = Diferença de potêncial(ddp)(V)<br />
                            I = Intensidade da corrente(A)
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eletrica;