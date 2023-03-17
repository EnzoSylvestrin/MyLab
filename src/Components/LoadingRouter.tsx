import { useNProgress } from '@tanem/react-nprogress'

export const LoadingRouter: React.FC<{ isRouteChanging: boolean }> = ({isRouteChanging}) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: isRouteChanging,
  });

  return (
    <>
      <div className="pointer-events-none" style={{opacity: isFinished ? 0 : 1, transition: `opacity ${animationDuration}ms linear`}}>
        <div className="bg-secondary h-[2px] left-0 fixed top-0 w-full z-[1031]" style={{marginLeft: `${(-1 + progress) * 100}%`, transition: `margin-left ${animationDuration}ms linear`}} />
      </div>
    </>
  )
}

export default LoadingRouter;