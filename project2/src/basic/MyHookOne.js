import { useState } from "react"

const MyHookOne = () => {
    const [city, setCity] = useState("")
    const [data, setdata] = useState("")

    const inputHandler = (e) => {
        setCity(e.target.value)
    }

    const clickHandler = () => {
        setdata(city)
    }

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [nmMsg, setNmMsg] = useState("")
    const [scndData, setscndData] = useState({ Name: "", Price: 0, number: 0 })

    const NameMsg = (a) => {
        setName(a.target.value)
    }
    const PriceMsg = (b) => {
        setPrice(b.target.value)
    }

    const NmMsg = (c) => {
        setNmMsg(c.target.value)
    }

    const two = () => {
        setscndData({ Name: name, Price: price, number: nmMsg })
    }
    return (
        <div id="container">
            <div id="inputSection">
                <input type="text" onInput={inputHandler} />
                <button onClick={clickHandler}> GO </button>
            </div>

            <p>{data} : {data.length}</p>

            <div id="box2">
                <label> Name </label>
                <input type="text" onChange={NameMsg} />
                <br />
                <label> Price </label>
                <input type="text" onChange={PriceMsg} />
                <br />
                <label> Number </label>
                <input type="text" onChange={NmMsg} />
                <br />
                <button onClick={two}> GO </button>
            </div>

            <p>{scndData.Name}: {scndData.Price}:{scndData.number}</p>
        </div>
    )
}








export default MyHookOne



// import React, { useState } from 'react'

// const MyHookOne = () => {
//     const [msg, setMsg] = useState(["bangalore"])
//     const [newMsg, setNewMsg] = useState("")

//     const pickValue = (event) => {
//         setNewMsg(event.target.value);
//     }

//     const[msg1,setMsg1]=useState(["Apple"]);
//     const[newMsg1, setNewMsg1]=useState("")
//     const[price,setPrice]=useState('300')
//     const[newPrice,setNewPrice]=useState("")

//     const pickbox2msg=(event)=>{
//         setNewMsg1(event.target.value)
//     }

//     const pickbox2price=(event)=>{
//         setNewPrice(event.target.value)
//     }

//     const one = () => {
//         setMsg([newMsg, ...msg])
//         setNewMsg("")
//     }

//     const two = () => {
//         setMsg1([newMsg1,...msg1])
//         setPrice([newPrice,...price])
//         setNewPrice("")
//         setNewMsg1("")
//     }

//     return (
//         <>
//             <h1>Simple List</h1>
//             <div className='container1'>
//                 <div className='box1'>
//                     <input type='text' className='inputsimple' value={newMsg} onChange={pickValue}/>
//                     <button className='btnsimple' onClick={one}>Go</button>
//                     <p className='result1'>{msg[0]} - {msg[0].length}</p>
//                 </div>
//                 <div className='box2'>
//                     <div> Name : <input type='text' className='inputsimple' value={newMsg1} onChange={pickbox2msg}/> </div>
//                     <div> Price : <input type='text' className='inputsimple' value={newPrice} onChange={pickbox2price}/> </div>
//                     <div> <button className='btnsimple1' onClick={two}> Go </button></div>
//                     <p className='result2'>{msg1[0]} price is : {price[0]}</p>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default MyHookOne