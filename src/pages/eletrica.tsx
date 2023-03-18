import { Formula } from "@/Components/Formula/Formula";

import { Heading } from "@/Components/Heading/Heading";

const Eletrica = () => {

    return (
        <div className="flex items-center w-full justify-center">
            <div className="w-full flex items-center justify-center flex-col">
                <Heading size="lg" className={'bg-clip-text !text-transparent !bg-gradient-to-r from-secondary to-purple-600'}>Física elétrica</Heading>
                <Formula formula={'R = V * i / I'} />
            </div>
        </div>
    );
}

export default Eletrica;