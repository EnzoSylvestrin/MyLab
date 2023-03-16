import { Heading } from "../Heading/Heading"
import { Input } from "../Input/Input"

type FormulaProps = {
    formula: string;
}

export const Formula = ({ formula } : FormulaProps) => {

    const Operators = ["=", "/", "*", "+", "-"];

    const MakeFormula = (formula: string) => {
        formula = formula.replaceAll(' ', '');

        let resultElement = [];

        for (let i = 0; i < formula.length; i++) {
            if (formula[i + 1] == '/') {
                resultElement.push(
                    <div className="flex flex-col gap-2 justify-center items-center">
                        {makeElement(formula[i], false)}
                        <div className="h-[2px] w-full bg-slate-800 dark:bg-gray-50" />
                        {makeElement(formula[i + 2], false)}    
                    </div>
                )
            }
            else {
                if (Operators.includes(formula)) {
                    resultElement.push(makeElement(formula[i], true))
                }
                else {
                    resultElement.push(makeElement(formula[i], false))
                }
            }
        }

        return resultElement;
    }

    const makeElement = (text: string, operator: boolean) => {
        if (operator) {
            return <Heading size="sm">{text}</Heading>
        }
        else {
            return <>
                <Heading size="sm">{text}</Heading>
                <Input.Root>
                    <Input.Input type={'text'} />
                </Input.Root>
            </>
        }
    } 

    const resultFormula = MakeFormula(formula);

    return (
        <div className="flex items-center justify-center gap-3 mt-4">
            {resultFormula}
        </div>
    )
}