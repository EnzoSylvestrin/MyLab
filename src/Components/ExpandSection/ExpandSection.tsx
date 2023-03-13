import { useState } from "react";

import { AiOutlineMore } from 'react-icons/ai';
import { BiX } from 'react-icons/bi';

import { motion } from "framer-motion";

import { DURATION_ANIMATION_SECTION } from "@/Utils/Contants";

import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

const ExpandSection = () => {

    const [open, setOpen] = useState(false);

    const HandleToggleSection = () => {
        setOpen(!open);
    }
    
    return (
        <>
            <motion.div 
                className="flex flex-col self-end mr-4 ring-2 rounded-2xl ring-secondary relative"
                animate={{
                    width: open ? '300px' : '35px',
                    height: 'auto',
                    padding: open ? '12px 8px' : '2px',
                }}
                transition={{
                    duration: DURATION_ANIMATION_SECTION,
                }}
            >
                <motion.div 
                    className="relative w-[30px]"
                    animate={{
                        rotate: open ? '180deg' : '0',
                    }}
                    transition={{
                        duration: DURATION_ANIMATION_SECTION,
                    }}
                    onClick={HandleToggleSection}
                >
                    <Icon icon={open ? BiX : AiOutlineMore}  colored />
                </motion.div>
                <motion.div 
                    className="w-full"
                    animate={{
                        display: open ? 'block' : 'none',
                        opacity: open ? 1 : 0
                    }}
                    transition={{
                        delay: open ? 0.3 : 0,
                        duration: open ? DURATION_ANIMATION_SECTION : 0
                    }}
                >
                    <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, error maxime illo</Text>
                </motion.div>
            </motion.div>
        </>
    );
}

export default ExpandSection;