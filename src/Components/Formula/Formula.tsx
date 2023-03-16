import { Input } from "../Input/Input"
import { Text } from "../Text/Text"

export const Formula = () => {
    return (
        <div className="flex items-center justify-center gap-3 mt-4">
            <Text>R</Text>
            <Input.Root>
                <Input.Input type={'text'} />
            </Input.Root>
            <Text className={'!text-secondary'}>=</Text>
            <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex justify-center items-center gap-2">
                    <Text>V</Text>
                    <Input.Root>
                        <Input.Input type={'text'} />
                    </Input.Root>
                </div>
                <div className="h-[2px] bg-secondary w-full" />
                <div className="flex items-center justify-center gap-2">
                    <Text>I</Text>
                    <Input.Root>
                        <Input.Input type={'text'} />
                    </Input.Root>
                </div>
            </div>
        </div>
    )
}