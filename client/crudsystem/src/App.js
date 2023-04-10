import "./App.css";
import Rect, {useState, useEffect} from 'react'
import axios from 'axios';

function App() {
  const [prodName, setProdName] = useState("");
  const [desc, setDesc] = useState("");
  // const [updateName, setNewName] = useState("");
  const [updateDesc, setNewDesc] = useState("");
  const [onchangeId, setOnchangeId] = useState("");
  
  const [product, setProduct] = useState([])
  const handleSubmit = () =>{
    console.log("submitted",prodName)
    axios.post("http://localhost:3001/api/add_product",{
      prodName, desc
    }).then((res)=>{
      alert("Successfully Added Product")
      getProdct()
      setProdName("");
      setDesc("")
    }).catch((err)=>{
      console.log(err)
    })
  }

  const getProdct = () =>{
    axios.get("http://localhost:3001/api/get_product")
      .then((res)=>{
        console.log(res.data)
        let list = res.data
        setProduct(list)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

const deleteProduct = (id) =>{
  axios.delete(`http://localhost:3001/api/delete_product/${id}`)
      .then((res)=>{
        alert("Deleted success")
        getProdct()
        
      })
      .catch((err)=>{
        console.log(err)
      })
}

const updateProduct = (id) =>{
  console.log("updateDesc",updateDesc)
  if(onchangeId != id){
    setNewDesc("")
    alert("Please enter description")
    return
  }
  axios.put(`http://localhost:3001/api/update_product/${id}`,{
    description: updateDesc,
  })
  .then((res)=>{
    
    alert("Update success")
    getProdct()
    setNewDesc("")
    
  })
  .catch((err)=>{
    console.log(err)
  })
}

  useEffect(()=>{
    getProdct()
  },[])
  return (
    <div className="App">
      <h1>First CRUD ReactJS + MYSQL App</h1>
      <label>Product name</label>
      <input type={"text"} placeholder="Enter name" value={prodName} onChange={(e)=>setProdName(e.target.value)}/>
      <label>Description</label>
      <input type={"text"} placeholder="Describe the product..." value={desc} onChange={(e)=>setDesc(e.target.value)}/>
      <button onClick={handleSubmit}>Add</button>
      
      <div className="prod-container">
        <h2>Product List</h2>
        {product && product.map((prod)=>{
          return(
            <div key={prod.id + prod.product_name} className="prod-row">
              <div className="prod-name">
                {prod.product_name}
              </div>
              
              <div style={{marginBottom:"30px"}}>
                {prod.description}
              </div>
              <input type={"text"} placeholder="Updat Description" defaultValue={""} onClick={()=>{setOnchangeId(prod.id)}} onChange={(e)=>setNewDesc(e.target.value)}/>
              <button onClick={()=>updateProduct(prod.id)}>Update</button>
              <button onClick={()=>{deleteProduct(prod.id)}}>Delete</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
