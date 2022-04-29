import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {addData, dataUpdate, getSingleEdit} from "../redux/actions/action";

const Adduser = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        gender:"",
        vehicle:[],
        country:""
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let { id } = useParams();

    const users = useSelector((state) => state.user);
    console.log("users",users.user)
    useEffect(()=>{
        if(id){
            dispatch(getSingleEdit(id));

        }
    },[])


    const { name, email, phone,vehicle, country , gender } = user;
    console.log("user",user)
    const OnchangeInput = e => {
        const {name,value,checked} = e.target;
        if (name === "vehicle"){
            if (checked) {
                user.vehicle.push(value)
                setUser(user);
            } else {
                let index = user.vehicle.indexOf(value)
                user.vehicle.splice(index,1);
                setUser(user);
            }
        } else {
            setUser({...user, [e.target.name]:e.target.value })
        }
    };

    useEffect(() => {
        setUser(users.user)
    }, [users.user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            dispatch(dataUpdate(user, id));
        } else {
            dispatch(addData(user));
        }
            navigate("/");
    };



    return(
        <div className="container">
            <form onSubmit={e => handleSubmit(e)}>
                <div className="form-group my-2">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Name"
                        name="name"
                        value={name}
                        onChange={e => OnchangeInput(e)}
                    />
                </div>

                <div className="form-group my-2">
                    <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter Your E-mail Address"
                        name="email"
                        value={email}
                        onChange={e => OnchangeInput(e)}
                    />
                </div>

                <div className="form-group my-2">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Phone Number"
                        name="phone"
                        value={phone}
                        onChange={e => OnchangeInput(e)}
                    />
                </div>

                <div className="form-group my-2 d-flex">
                    <label><strong>Gender:</strong></label>
                    <div className="form-check mx-2">
                        <input className="form-check-input" type="radio" name="gender" value={"male"} checked={gender === "male" ? true : false} onChange={e => OnchangeInput(e)} />
                        <label className="form-check-label">
                            male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value={"female"} checked={gender === "female" ? true : false} onChange={e => OnchangeInput(e)} />
                        <label className="form-check-label">
                            female
                        </label>
                    </div>
                </div>

                <div className="form-group my-2 d-flex">
                    <label><strong>Vehicle:</strong></label>
                    <div className="form-check mx-2">
                        <input className="form-check-input" type="checkbox" name="vehicle" value={"car"} onChange={e => OnchangeInput(e)} />
                        <label className="form-check-label">
                            car
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="vehicle" value={"bike"} onChange={e => OnchangeInput(e)} />
                        <label className="form-check-label">
                            bike
                        </label>
                    </div>
                </div>

                <div className="form-group my-2 d-flex">
                    <label><strong>Country:</strong></label>
                    <select name="country" value={country} onChange={e => OnchangeInput(e)}>
                        <option value={""}></option>
                        <option value={"pakistan"}>pakistan</option>
                        <option value={"africa"}>africa</option>
                        <option value={"china"}>china</option>
                        <option value={"other"}>other</option>
                    </select>
                </div>

                <button className="btn btn-primary btn-block">Add User</button>

            </form>
        </div>
    );
};

export default Adduser;