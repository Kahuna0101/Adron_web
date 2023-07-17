import { Text } from "@chakra-ui/react"
import Link from "next/link"

export const contacts = [
    {
        title:"Call us:", paragraph:"+234 9018604383"
    },
    {
        title:"Address:", paragraph:"75, Adron Court, Adeyemo Akapo, Omole Phase 1, Lagos. "
    },
    {
        title:"Email us:", paragraph: <Link href="mailto:clientservice@adronhomesproperties.com"><Text _hover={{color:'#1e2022'}}>clientservice@adronhomesproperties.com</Text></Link>
    },
] 

export const locations = [
    {
        title:"Corporate Head Office",
        address:"75, Adron Court, Adeyemo Akapo, Omole Phase 1, Lagos.",
        phone:"+234-8082146899, +234-8113404040",
        email:"mainland@adronhomesproperties.com",
        link:"mailto:mainland@adronhomesproperties.com"
    },
    {
        title:"Adron Experience Center",
        address:"70, Adron Court, Adeyemo Akapo, Omole Phase 1, Lagos.",
        phone:"+234-9058590357, +234-9058590355,  +234-9058590356",
        email:"clientservice@adronhomesproperties.com",
        link:"mailto:clientservice@adronhomesproperties.com"
    },
    {
        title:"Island Office",
        address:"14b, Adeola Hopewell, Victoria island, Lagos.",
        phone:"+234-8180751599,  +234-8113404040",
        email:"Island@adronhomesproperties.com ",
        link:"mailto:Island@adronhomesproperties.com"
    },
    {
        title:"Surulere Office",
        address:"10, Bode Thomas Street, Surulere, Lagos.",
        phone:"+234-8023236621,  +234-7061194526",
        email:"mainland3@adronhomesproperties.com",
        link:"mailto:mainland3@adronhomesproperties.com"
    },
    {
        title:"RCCG Camp Office",
        address:"Lagos Province 28 Building, Lotto Road, By Tree of Life estate, Redeemed Camp.",
        phone:"+234-8054765469,  +234-8113404040",
        email:"mainland5@adronhomesproperties.com",
        link:"mailto:mainland5@adronhomesproperties.com"
    },
    {
        title:"Lekki Office",
        address:"34, Freedom way, Ikate Lekki",
        phone:"+234-9093934115,  +234-8134216595,  +234-7088242833",
        email:"island3@adronhomesproperties.com",
        link:"mailto:island3@adronhomesproperties.com"
    },
]