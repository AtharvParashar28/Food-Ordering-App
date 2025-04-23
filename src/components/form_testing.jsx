import { useState } from "react"

const Form = () =>{

    const [inputValue,setinputValue] = useState({Name:"",gender:"",number:"",email:"",text:""})

    const handleChange = (e) =>{
        const {name,value} = e.target;
        console.log(e.target.name,e.target.value);

        // if(type==='radio'){
        //     setinputValue((previnputValue)=>({...previnputValue,check:value}))
        // }
        // else{
        //     setinputValue((previnputValue)=>({...previnputValue,[name]:value}))
        // }
        setinputValue((previnputValue)=>({...previnputValue,[name]:value}))
        
    }

    // const handleChange1 = (e) =>{
    //     setinputValue(e.target.value)
    // }

    // const handleChange2 = (e) =>{
    //     setdropValue(e.target.value)
    // }

    // const handleChange3 = (e) => {
    //     setcheckValue(e.target.value)
    // }

    // const handleChange4 = (e) =>{
    //     setemailValue(e.target.value)
    // }

    // const handleChange5 = (e) =>{
    //     settextValue(e.target.value)
    // }

    // prevent default submittion of form(prevent reloading of form)
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${inputValue.name}, Email: ${inputValue.email}, Comment: ${inputValue.text}, selected: ${inputValue.number},Gender: ${inputValue.gender}`)
    }

    return(
        <div className="form">
            <h1>Please Fill the form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input type="text" name="name" onChange={handleChange} value={inputValue.name}/><br></br>
                {/* <p>Display : {inputValue}</p> */}

                {/* handling dropdown */}
                <label>Gender :</label>
                <select value={inputValue.gender} onChange={handleChange} name="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                    <option value="Cannot reveal">Cannot reveal</option>
                </select>
                {/* <p>{dropValue}</p> */}
                <br></br>

                {/* handling checkboxes */}
                <label>plese click box :</label>
                <br></br>

                <label>1</label>
                <input type="radio" name="number" value='1' onChange={handleChange}/>
                <br></br>

                <label>2</label>
                <input type="radio" name="number"  value='2' onChange={handleChange}/>
                <br></br>

                <label>3</label>
                <input type="radio" name="number" value='3' onChange={handleChange}/>
                <br></br>

                <label>4</label>
                <input type="radio" name="number"  value='4' onChange={handleChange}/>
                <br></br>

                {/* <p>You selected : {checkValue}</p> */}

        
                <br></br>
                <br></br>

                {/* using multiple fields (email id and textarea) */}

                <label>enter email id :</label>
                <input type="email" value={inputValue.email} name="email" onChange={handleChange}/>
                {/* <p>{emailValue}</p> */}
                <br></br>

                <label>Comment :</label>
                <textarea value={inputValue.text} name="text" onChange={handleChange}></textarea>
                {/* <p>{textValue}</p> */}
                <br></br>





                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Form;