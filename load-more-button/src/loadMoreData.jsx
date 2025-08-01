import { useEffect, useState } from "react";
import './styles.css'
export default function LoadMoreData(){
    const [data,setData] = useState([]);
    const [count,setCount] = useState(0);
    const [disable,setDisable] = useState(false)
        function skip(){
            setCount(prev => prev+1);
        }
    useEffect(() => {
        async function getdata(){
        count === 5 ? setDisable(true) : setDisable(false);
        try{
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count*20}`);
            const jsondata = await response.json();
            setData(prevData => [...prevData, ...jsondata.products]);
        }catch(e){
            console.log(e);
        }
        }
        getdata();
    },[count]);

    return(
        <div className="container">
            <div className="item-list">
                {
                    data.map((item) => (
                            <div key={item.id} className="item">
                                <img src={item.images} alt={item.brand}/>
                                <div>{item.title}</div>
                            </div>
                        )
                    )
                }
            </div>
            <button disabled={disable} onClick={() => skip()}>Load more</button>
            {disable && <div>you have reached to 100 products</div>}
        </div>
    )
}