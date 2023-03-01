import { Player } from '@lottiefiles/react-lottie-player';

import clsx from 'clsx';

type LoadingProps = {
    w?: string | number,
    h?: string | number,
    align?: 'left' | 'center' | 'right'
}

export const Loading = ({ w = '80px', h = '80px', align = 'center' }: LoadingProps) => {
    return (
        <div className={clsx(
            `flex-1 flex items-center `, {
            'justify-start': align === 'left',
            'justify-center': align === 'center',
            'justify-end': align === 'right'
        })}>
            <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_usmfx6bp.json"
                style={{ height: h, width: w }}
            >
            </Player>
        </div>
    );
}