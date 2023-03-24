import React from "react";

import clsx from "clsx";

import { Text } from "../Text/Text";

type TableProps = {
    gridTemplate: string,
    cols: number,
    Itens: string[],
    className?: string
}

export const Table = ({ gridTemplate, cols, Itens, className }: TableProps) => {
    return (
        <div className={clsx("flex items-center justify-center w-full", className)}>
            <div className={clsx('grid w-[90%]', gridTemplate)}>
                {
                    Itens.map((item, i) => (
                        <div
                            key={i}
                            className={
                                i < cols
                                    ?
                                    `flex items-center justify-center p-1 bg-gray-300 ${i == 0 ? 'rounded-tl-md' : i == cols - 1 ? 'rounded-tr-md border-l-0' : ''} border border-black dark:border-white dark:bg-gray-600`
                                    :
                                    `flex items-center justify-center p-1 bg-gray-200 ${i % cols == 0 ? 'border-x' : 'border-r'} border-b border-black dark:border-white dark:bg-gray-700`
                            }
                        >
                            <Text align="center">{item}</Text>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}