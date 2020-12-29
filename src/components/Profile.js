import React,{useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setEdit, setEditDone } from "../redux/ui/uiActions";
import { editUser } from "../redux/user/userActions";

function Profile() {
    const state = useSelector(state=>state);
    const oemail = state.user.email;
    const opassword = state.user.password;
    const [editval,setEditval]=useState({
        name :state.user.name,
        email :state.user.email,
        password:state.user.password
    });
    const dispatch = useDispatch();
    var profile; 
    const handelClick = ()=>{
         let value ={
            oemail : oemail,
            opassword:opassword,
            name:editval.name,
            email:editval.email,
            password:editval.password
         };
         dispatch(editUser(value));
         dispatch(setEditDone());
    }
    if(state.ui.editable){
        profile  = <div>
            <div className="info name">
                 <input type="text" value={editval.name} onChange={(e)=>setEditval({...editval,name:e.target.value})}/>
            </div>
            <div className="info">
                <input type="email" value={editval.email} onChange={(e)=>setEditval({...editval,email:e.target.value})}/>
            </div>
            <div className="info">
                 <input type="text" value={editval.password} onChange={(e)=>setEditval({...editval,password:e.target.value})}/>
            </div>
            <div className="btn" onClick={handelClick}>
                <i className="far fa-check-square"></i>
            </div>
        </div>
     }
     else{
        profile = <div>
            <div className="info name">
                Name : {state.user.name}
            </div>
            <div className="info">
                email : {state.user.email}
            </div>
            <div className="info">
                password : {state.user.password}
            </div>
            <div className="btn" onClick={()=>dispatch(setEdit())}>
                <i className="fas fa-edit" ></i>
            </div>
        </div>
     }
     
    return (
        <div className="profile-container">
            {profile}
        </div>
    )
}

export default Profile;
