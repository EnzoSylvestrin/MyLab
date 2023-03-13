import ExpandSection from "@/Components/ExpandSection/ExpandSection";
import { Heading } from "@/Components/Heading/Heading";

const Eletrica = () => {
    return (
        <div className="flex items-center w-full justify-center">
            <div className="w-full flex items-center justify-center">
                <Heading size="md" className={'bg-clip-text !text-transparent !bg-gradient-to-r from-secondary to-purple-600'}>Física elétrica</Heading>
            </div>
            <ExpandSection />
        </div>
    );
}

export default Eletrica;