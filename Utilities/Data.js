import { CgGym } from 'react-icons/cg'
import { FaBowlFood } from 'react-icons/fa'
import { GiConverseShoe } from 'react-icons/gi'
import { RiTruckLine } from 'react-icons/ri'
import { AiOutlineFormatPainter } from 'react-icons/ai'
import { MdOutlineCarpenter, MdPlumbing } from 'react-icons/md'
import { LuGlassWater, LuShirt } from 'react-icons/lu'

export const Categories = [
    {
        name: 'Food',
        type: 'Goods',
        icon: <FaBowlFood />
    },
    {
        name: 'Water',
        type: 'Goods',
        icon: <LuGlassWater />
    },
    {
        name: 'Clothes',
        type: 'Goods',
        icon: <LuShirt />
    },
    {
        name: 'Shoes',
        type: 'Goods',
        icon: <GiConverseShoe />
    },
    {
        name: 'Movers',
        type: 'services',
        icon: <RiTruckLine />
    },
    {
        name: 'Gym Instructor',
        type: 'services',
        icon: <CgGym />
    },
    {
        name: 'Carpenter',
        type: 'services',
        icon: <MdOutlineCarpenter />
    },
    {
        name: 'Plumber',
        type: 'services',
        icon: <MdPlumbing />
    },
    {
        name: 'Painter',
        type: 'services',
        icon: <AiOutlineFormatPainter />
    },
]