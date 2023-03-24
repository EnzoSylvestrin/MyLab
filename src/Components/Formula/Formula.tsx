import { Heading } from "../Heading/Heading";
import { Input } from "../Input/Input";

type FormulaProps = {
    formula: string;
}

type ParenthesesElements = {
    Elements: JSX.Element[],
}

export const Formula = ({ formula }: FormulaProps) => {

    const Operators = ["=", "/", "*", "+", "-", "^"];

    const MakeFormula = (formula: string) => {
        formula = formula.replaceAll(' ', '');

        let resultElement: JSX.Element[] = [];

        let Elements: ParenthesesElements[] = [];

        let resultParentheses = makeElementsWithparentheses(formula);
        formula = resultParentheses.formula;
        Elements = resultParentheses.Elements;

        for (let i = 0; i < formula.length; i++) {
            let distance = getDistanceToOperator(formula, i);

            if (formula[i + distance] == '/') {
                let distance2 = getDistanceToOperator(formula, i + distance + 1);
                resultElement.push(
                    <div className="flex flex-col gap-2 justify-center items-center" key={i}>
                        {
                            formula[i] == ' '
                                ?
                                (() => {
                                    const jsxElement = ConvertToAUniqueElement(Elements[0].Elements, i);
                                    Elements.shift();
                                    return jsxElement;
                                })()
                                :
                                makeElement(formula.substring(i, i + distance), false, i + distance)
                        }
                        <div className="h-[2px] w-full bg-slate-800 dark:bg-gray-50" key={i + distance + 1 + distance2} />
                        {
                            formula[i + 2] == ' '
                                ?
                                (() => {
                                    const jsxElement = ConvertToAUniqueElement(Elements[0].Elements, i + 2);
                                    Elements.shift();
                                    return jsxElement;
                                })()
                                :
                                makeElement(formula.substring(i + distance + 1, i + distance + distance2 + 1), false, i + distance + distance2)
                        }
                    </div>
                );
                i += distance + distance2;
            }
            else {
                if (Operators.includes(formula[i])) {
                    resultElement.push(makeElement(formula[i], true, i))
                }
                else if (formula[i] == ' ') {
                    resultElement.push(ConvertToAUniqueElement(Elements[0].Elements, i));
                }
                else {
                    resultElement.push(makeElement(formula.substring(i, i + distance), false, i))
                    distance > 1 ? i += distance - 1 : '';
                }
            }
        }
        return resultElement;
    }

    const ConvertToAUniqueElement = (Elements: JSX.Element[], id: number): JSX.Element => {
        let result = <div className="flex items-center gap-3" key={id}>
            {
                Elements.map(element => {
                    return element;
                })
            }
        </div>

        return result;
    }

    const makeElementsWithparentheses = (formula: string): { Elements: ParenthesesElements[], formula: string } => {
        let elements: ParenthesesElements[] = [];

        while (formula.indexOf('(') > -1) {
            let start = formula.indexOf('(');
            let end = formula.indexOf(')');
            if (end == -1) {
                return {
                    Elements: elements,
                    formula: formula.substring(0, start) + '' + formula.substring(start + 1),
                }
            }
            elements.push({ Elements: MakeFormula(formula.substring(start + 1, end)) });
            formula = formula.substring(0, start) + ' ' + formula.substring(end + 1);
        }

        return {
            Elements: elements,
            formula: formula
        };
    }

    const getDistanceToOperator = (formula: string, init: number): number => {
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
        if (operator || !isNaN(parseInt(text))) {
            return <div key={id}>{WriteElement(text, id)}</div>
        }
        else {
            return (
                <div className="flex items-center gap-2 justify-center" key={id}>
                    {WriteElement(text, id)}
                    <Input.Root>
                        <Input.Input type={'text'} />
                    </Input.Root>
                </div>
            )
        }
    }

    const WriteElement = (text: string, id: number) => {
        return text.length == 1
            ? <Heading size="sm" >{text}</Heading>
            : <Heading size="sm" >{text[0]}<sub>{text.substring(1)}</sub></Heading>
    }

    return (
        <div className="flex items-center justify-center gap-3 mt-4">
            {MakeFormula(formula)}
        </div>
    )
}