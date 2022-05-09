import axios from "axios"
import { useEffect,useState } from "react"

const Landing = () => {
    const [data, setData] = useState([])
    
    
    async function getData() {
        const response =await axios.get('http://localhost:4000/getAllMovie');
        const movies = response.data.movies[0].items
        console.log(response.data.movies[0].items)
        setData(movies);
    }
    useEffect(() => {
        getData();
    }, [])
    

   
    return (
        
        <div className="  movies bg-dark text-light  p-5 m-5 d-flex  ">
            {
                data.map((item,indx) => (
                    
                    <div className=""  key={indx}  >
                        <img src={item.image}   alt="error" className="p-1 m-1 " />
                        
                        <hr/>
                    </div>
                    
                    
                ))
            }
        </div>
    )
}
export default Landing