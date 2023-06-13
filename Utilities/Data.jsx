import { CgGym } from 'react-icons/cg'
import { IoFastFoodOutline } from 'react-icons/io5'
import { GiConverseShoe } from 'react-icons/gi'
import { RiTruckLine } from 'react-icons/ri'
import { AiOutlineFormatPainter } from 'react-icons/ai'
import { MdOutlineCarpenter, MdPlumbing } from 'react-icons/md'
import { LuGlassWater, LuShirt } from 'react-icons/lu'

export const Categories = [
    {
        name: 'food',
        form: 'goods',
        icon: <IoFastFoodOutline />,
    },
    {
        name: 'water',
        form: 'goods',
        icon: <LuGlassWater />,
    },
    {
        name: 'clothes',
        form: 'goods',
        icon: <LuShirt />,
    },
    {
        name: 'shoes',
        form: 'goods',
        icon: <GiConverseShoe />,
    },
    {
        name: 'movers',
        form: 'services',
        icon: <RiTruckLine />,
    },
    {
        name: 'gym instructor',
        form: 'services',
        icon: <CgGym />,
    },
    {
        name: 'carpenter',
        form: 'services',
        icon: <MdOutlineCarpenter />,
    },
    {
        name: 'plumber',
        form: 'services',
        icon: <MdPlumbing />,
    },
    {
        name: 'painter',
        form: 'services',
        icon: <AiOutlineFormatPainter />,
    },
];