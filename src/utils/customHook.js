
import {useEffect, useState} from 'react'
import { MENU_URL, SWIGGY_RESTAURANT_API } from './constants'

export const useOnlineStatus = ()=>{
    const [onlineStatus, setOnlineStatus] = useState(true)

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false)
        })

        window.addEventListener("online", ()=>{
            setOnlineStatus(true)
        })

    },[])

    return onlineStatus
}

export const useResturantMenu = (resId)=>{
    
    const [resMenu, setResMenu] = useState(null)
    // fetch Data
    useEffect(()=>{
        const fetchData= async ()=>{
            try{
                const data = await fetch(MENU_URL + resId)
                const json = await data.json()

                setResMenu(json)
            } catch (error){
                console.error("Error fetching Menu", error)
            }
        }

        fetchData()
    },[resId])

    return resMenu
}

export const useFetchRestaurantData = ()=>{
    const [resData, setResData] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const data = await fetch(SWIGGY_RESTAURANT_API)
            const jsonData = await data.json()
            setResData(jsonData)
        }
        
        fetchData()

    })

    return resData
}