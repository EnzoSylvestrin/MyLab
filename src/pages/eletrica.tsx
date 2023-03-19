import { Formula } from "@/Components/Formula/Formula";

import { Heading } from "@/Components/Heading/Heading";
import { Text } from "@/Components/Text/Text";

const Eletrica = () => {

    return (
        <div className="flex items-center w-full justify-center">
            <div className="w-full flex items-center justify-center flex-col">
                <Heading size="lg" className={'bg-clip-text !text-transparent !bg-gradient-to-r from-secondary to-red'}>Física elétrica</Heading>
                <Text className={'text-slate-500 dark:text-slate-500'}>Entenda o efeito das cargas elétricas sobre a matéria</Text>
            </div>
        </div>
    );
}

export default Eletrica;