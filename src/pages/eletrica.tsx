import { Formula } from "@/Components/Formula/Formula";

import { Heading } from "@/Components/Heading/Heading";

const Eletrica = () => {
    return (
        <div className="flex items-center w-full justify-center">
            <div className="w-full flex items-center justify-center flex-col">
                <Heading size="lg" className={'bg-clip-text !text-transparent !bg-gradient-to-r from-secondary to-purple-600'}>Física elétrica</Heading>
                <Heading className="mt-2">
                    R = V / I
                </Heading>
                <Formula />
            </div>
        </div>
    );
}

export default Eletrica;