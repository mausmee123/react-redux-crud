import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {userView} from "../redux/actions/action";
import Button from "react-bootstrap/Button";

const Viewuser = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    let { id } = useParams();

    const users = useSelector((state) => state.user);
    console.log("users",users.user)

    const {user} = users

    useEffect(() => {
        dispatch(userView(id));
    }, [ id ]);


    return(
        <div className="container">
            <ul className="list-group w-50" key={user.id}>
                <li className="list-group-item">name: {user.name}</li>
                <li className="list-group-item">email: {user.email}</li>
                <li className="list-group-item">phone: {user.phone}</li>
                <li className="list-group-item">gender: {user.gender}</li>
                <li className="list-group-item">vehicle: {user.vehicle}</li>
                <li className="list-group-item">country: {user.country}</li>
            </ul>
            <Button color="primary" onClick={() => navigate("/")}>Back</Button>
        </div>
    );
};

export default Viewuser;