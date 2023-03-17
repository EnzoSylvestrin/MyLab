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
            let distance = getDistanceToOperator(formula, i);
            
            if (formula[i + distance] == '/') {
                let distance2 = getDistanceToOperator(formula, i + distance + 1);
                resultElement.push(
                    <div className="flex flex-col gap-2 justify-center items-center">
                        {makeElement(formula.substring(i, i + distance), false, i)}
                        <div className="h-[2px] w-full bg-slate-800 dark:bg-gray-50" />
                        {makeElement(formula.substring(i + distance + 1, i + distance + distance2 + 1), false, i + distance)}  
                    </div>
                )
                i += distance + distance2;
            }
            else {
                if (Operators.includes(formula[i])) {
                    resultElement.push(makeElement(formula[i], true, i))
                }
                else {
                    resultElement.push(makeElement(formula.substring(i, i + distance), false, i))
                    distance > 1 ? i += distance - 1 : '';
                }
            }
        }

        return resultElement;
    }

    const getDistanceToOperator = (formula: string, init: number) : number => {
        let distance = 0;
        for (let j = init; j < formula.length; j++) {
            if (Operators.includes(formula[j])) {
                distance = Math.abs(j - init);
                break;
            }
        }
        if (distance == 0) distance = formula.length - init;
        return distance;
    }

    const makeElement = (text: string, operator: boolean, id: number) => {
        if (operator) {
            return <>{WriteElement(text)}</>
        }
        else {
            return (
                <div className="flex items-center gap-2 justify-center" key={id}>
                    {WriteElement(text)}
                    <Input.Root>
                        <Input.Input type={'text'} />
                    </Input.Root>
                </div>
            )
        }
    }

    const WriteElement = (text: string) => {
        return text.length == 1 
        ? <Heading size="sm">{text}</Heading> 
        : <Heading size="sm">{text[0]}<sub>{text.substring(1)}</sub></Heading>
    }

    return (
        <div className="flex items-center justify-center gap-3 mt-4">
            {MakeFormula(formula)}
        </div>
    )
}