import React,{useState,useEffect} from 'react'

const Products = () => {
    const [data,setData] = useState([]);
    const [filter,setFilter] = useState(data);
    const [loading,setloading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts= async () => {
            setloading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if(componentMounted){
                setData(await response.json());
                setFilter(await response.json());
                setloading(false);
            }
            return()=>{
                componentMounted = false;
            }
        }
        getProducts();
    },[])


  return (
    <div>

    </div>
  )
}

export default Products