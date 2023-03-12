import { Heading } from "@/Components/Heading/Heading";

const Eletrica = () => {
    return (
        <div className="flex items-center w-full justify-center">
            <div className="w-full flex items-center justify-center">
                <Heading size="md" className={'bg-clip-text !text-transparent !bg-gradient-to-r from-secondary to-purple-600'}>Física elétrica</Heading>
            </div>
            <div className="w-[300px] self-end ring-2 ring-secondary rounded-lg px-2 py-3 mr-[20px]">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, ipsu</p>
            </div>
        </div>
    );
}

export default Eletrica;