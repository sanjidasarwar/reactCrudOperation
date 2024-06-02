import { useEffect, useState } from "react";

const useFetchData =(url, cb)=>{
    const [data, setdata] = useState([])
    const [error, setError] =useState('')
    const [loading, setLoading] = useState(false);


    useEffect(()=>{
        fetchData()
    }, [])

    async function fetchData(){
       setLoading(true)
       try{
        const response = await fetch(url)
        const fetchData = await response.json()
        if(cb){
            setdata(cb(fetchData))
        }else{
            setdata(fetchData)
        }
        setError('')
        setLoading(false)
       }catch(err){
        console.dir(err.message)
        setError('Server Error')
       } finally {
        setLoading(false);
    }
    }

    return {
        data,
        error,
        loading
    }
}

export default useFetchData;