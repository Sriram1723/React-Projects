import { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);

    const fetchData = async() => {
        try{
            setLoading(true);
            const response = await fetch(url);
            const responseData = await response.json();
            setData(responseData.products);
            setLoading(false)
        }catch(e){
            setError(e.message)
        }
    }
    
    useEffect(() =>{
        fetchData()
        // eslint-disable-next-line
    },[url])
    return {loading,data,error};
}

export default useFetch
