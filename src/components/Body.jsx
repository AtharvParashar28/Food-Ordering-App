import ResCard,{PromotedRes} from "./ResCard";
import { useState,useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { API } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {

  // Using the context
  const {user,SetUser} = useContext(UserContext);

  const Promoted_ResCard = PromotedRes(ResCard);
  let [Res,setRes] = useState([]);

  // Now using state variable
  let [Inputvalue,setInputvalue] = useState('');

  const handlechange = (e) =>{
    setInputvalue(e.target.value);
  }

  const searching = () =>{
    setRes(Res.filter((res)=>(res?.info?.name.toLowerCase().includes(Inputvalue.toLowerCase()))))
  }

  const toprated = () =>{
      let filteredRes = Res.filter((res) => res?.info?.avgRating >= 4.5);
      console.log(filteredRes);
      setRes(filteredRes)
  }
  
  const fetchData = async () =>{
            const data = await fetch(API);
            
            const json = await data.json();
            
            setRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          }
          
    useEffect(() => {
            fetchData();
          },[]);

    useEffect(() => {
      console.log('fetched data',Res);
      console.log('is opened or not',Res?.[0]?.info?.isOpen)
    },[Res]);
 
  console.log("Body rendered")


  return (
  <div className="flex flex-col border-2 gap-8 p-4">
        <div className="text-center">
          <button onClick={toprated} className="m-8 bg-white w-18 rounded-lg">Filter Top rated</button>
        </div>

        <div className="text-center">
                <input type="text" value={Inputvalue} onChange={handlechange} className="border p-1 rounded"/>
                <button type="submit" onClick={searching} className="ml-2 bg-blue-500 text-white rounded px-3 py-1">Search</button>
        </div>

        <div>
          <label >User Name : </label>
          <input
           type="text"
           value={user}
           onChange={(e)=>SetUser(e.target.value)}
           />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {
            // (Res.length === 0)
            (Res === null) 
            ?
            <Shimmer/>
            :
            Res?.map((resdata,index) => (
              (resdata?.info?.isOpen)  
            ?
            <Link to={'/restaurant/'+resdata?.info?.id}  key={index}>
              <Promoted_ResCard resdata={resdata}/>
            </Link>
            :
            <Link to={'/restaurant/'+resdata?.info?.id}  key={index}>
              <ResCard resdata={resdata}/>
            </Link>
            )
          )
        }
        </div>
    </div>
)}

export default Body;

// promoted hoc
// resdata.data.promoted ?
                // (<Promoted_ResCard key={resdata.data.id} resdata={resdata}/>)
                // :
                // (<ResCard key={resdata.data.id} resdata={resdata}/>)
