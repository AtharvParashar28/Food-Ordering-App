import { useRouteError } from "react-router-dom";

const error = () =>{
    const err = useRouteError();
    return(
        <div className="container">
            <h1>{err.status}</h1>
            <img src="https://media0.giphy.com/media/12dC9ZtdU9mk4o/200.webp?cid=790b761134ccbrjd2dqfskyezj6lskwa8si589irvjbc8drq&ep=v1_gifs_search&rid=200.webp&ct=g" alt="OOPS!!!" />
        </div>
    )
}

export default error;