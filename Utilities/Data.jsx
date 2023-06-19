import { CgGym } from 'react-icons/cg'
import { IoFastFoodOutline } from 'react-icons/io5'
import { GiConverseShoe } from 'react-icons/gi'
import { RiTruckLine } from 'react-icons/ri'
import { AiOutlineFormatPainter } from 'react-icons/ai'
import { MdOutlineCarpenter, MdPlumbing } from 'react-icons/md'
import { LuGlassWater, LuShirt } from 'react-icons/lu'

export const AllCategories = [
    {
        name: 'Food',
        form: 'Goods',
        icon: <IoFastFoodOutline />,
    },
    {
        name: 'Water',
        form: 'Goods',
        icon: <LuGlassWater />,
    },
    {
        name: 'Clothes',
        form: 'Goods',
        icon: <LuShirt />,
    },
    {
        name: 'Shoes',
        form: 'Goods',
        icon: <GiConverseShoe />,
    },
    {
        name: 'Movers',
        form: 'Services',
        icon: <RiTruckLine />,
    },
    {
        name: 'Gym Instructor',
        form: 'Services',
        icon: <CgGym />,
    },
    {
        name: 'Carpenter',
        form: 'Services',
        icon: <MdOutlineCarpenter />,
    },
    {
        name: 'Plumber',
        form: 'Services',
        icon: <MdPlumbing />,
    },
    {
        name: 'Painter',
        form: 'Services',
        icon: <AiOutlineFormatPainter />,
    },
];