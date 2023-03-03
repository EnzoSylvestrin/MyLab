import { Heading } from "@/Components/Heading/Heading";

import ErrorImg from '../assets/404.png';

const Error = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col">
        <img
          className="h-72"
          src={ErrorImg.src}
        />
        <Heading className='mt-4' align='center' size="sm">
          A página que você estava procurando, não foi encontrada!
        </Heading>
    </div>
  )
}

export default Error;