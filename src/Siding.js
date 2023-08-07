import React,{useState}from 'react'
import './App.css';

const list=[
    {
        id:"a",
        name:"Ajith"
    },{
        id:"b",
        name:"Zybisys"
    }
];


const Siding = ({notes,Addnotes,editing,deleting}) => {
    const [list,setList]=useState("initialList");
    const [name,setName]=useState(' ');

    function handleChange(event){
        setName(event.target.value);
    }
    function handleAdd(){
        const newList=list.concat({name})
        setList(newList)
        setName('');
    }
  return (

    <div>
        {/* <div>
            <Additem name={name} onChange={handleChange} onAdd={handleAdd}/>
            <List list={list}
        </div> */}
      <div className="app-sidebar-content">

        <h2>Notes</h2>
        <input type="text" value={name} id="input-cotent" className="text-box" onChange={handleChange} placeholder="Enter the input" autoFocus/>
        <textarea cols="30"
        class="area"
        rows="8"
        placeholder="type..."
        maxLength="4000"
        ></textarea>   
        <button onClick={Addnotes} class="add">ADD</button>

        
      </div>

      <div className="Main-part">
        {/* {notes.map((note)=>{ */}
        <button onClick={editing} class="edit_btn">EDIT</button>
        <button onClick={deleting}class="delete_btn">DELETE</button>

            <ul className="Addition-of-the-list">
                {/* {list.map((item)=>{
                    <li key={item.id}>{item.name}</li>
                })} */}
            </ul>
          
            
            
        {/* })} */}
      </div>
    </div>
  )
}

export default Siding





