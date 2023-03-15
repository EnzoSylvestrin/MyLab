import ExpandSection from "@/Components/ExpandSection/ExpandSection";

import { Heading } from "@/Components/Heading/Heading";
import { Input } from "@/Components/Input/Input";
import { Text } from "@/Components/Text/Text";

const Eletrica = () => {
    return (
        <div className="flex items-center w-full justify-center">
            <div className="w-full flex items-center justify-center flex-col">
                <Heading size="lg" className={'bg-clip-text !text-transparent !bg-gradient-to-r from-secondary to-purple-600'}>Física elétrica</Heading>
                <Heading className="mt-2">
                    R = V / I
                </Heading>
                <div className="flex w-full gap-8 px-6 items-center justify-center">
                    <label htmlFor="Resistencia">
                        <Text>Resistência</Text>
                        <Input.Root>
                            <Input.Input type={"text"} id="Resistencia" />
                        </Input.Root>
                    </label>
                    <Text size="lg">=</Text>
                    <label htmlFor="Tensao">
                        <Text>Tensão</Text>
                        <Input.Root>
                            <Input.Input type={"text"} id="Tensao" />
                        </Input.Root>
                    </label>
                    <label htmlFor="Corrente">
                        <Text>Corrente</Text>
                        <Input.Root>
                            <Input.Input type={"text"} id="Corrente" />
                        </Input.Root>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Eletrica;