import React, {useEffect} from "react";
import Table from 'react-bootstrap/Table'
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {deleteUser, loadUsers} from "../redux/actions/action";
import {useNavigate} from "react-router";


const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(loadUsers());
    }, []);

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    return (
        <div className="container">
    <Table striped bordered hover>
        <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Vehicle</th>
            <th>Country</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>

        {
            users.userData.map((user, index) => (
                <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.gender}</td>
                    <td>{user.vehicle}</td>
                    <td>{user.country}</td>
                    <td>

                        <Button color="primary" onClick={() => navigate(`/adduser/${user.id}`)}>Edit</Button>
                        <Button className="btn btn-danger" onClick={() => handleDelete(user.id)}>delete</Button>
                        <Button color="primary" onClick={() => navigate(`/viewuser/${user.id}`)}>View</Button>
                    </td>
                </tr>
            ))
        }


        </tbody>
    </Table>
            <Button variant="primary" type="submit" onClick={() => navigate("/Adduser")}>
                add user
            </Button>
        </div>
    );
};

export default Home;