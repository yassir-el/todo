import React, { useEffect, useState } from "react"
import axios from 'axios';


export default function  useTodos() {
    const [listTodayTasks, setListTodayTasks] = React.useState([])

    const getTodos = () => {
        try {
            axios.get('http://127.0.0.1:8080/todo/').then(response => {
                console.log("data ", response.data);
                setListTodayTasks(response.data.todos)
            }).catch((e) => {
                console.error(e);
            })
        } catch(e) {
            console.error(e.message);
        }
    }

    useEffect(() => {
        getTodos();
    },[])

    return {
        listTodayTasks, setListTodayTasks
    }
}

/*
    https://www.youtube.com/watch?v=9ySmMd5Cjc0
    https://www.youtube.com/watch?v=wikEEKvyPug&t=96s
    https://axios-http.com/docs/post_example
    https://www.theodinproject.com/users/profile/edit
    https://codepen.io/maheshambure21/pen/EozKKy
    https://www.theodinproject.com/users/sign_in
    https://www.prisma.io/docs/orm/reference/prisma-client-reference
    https://codepen.io/WhisnuYs/pen/oNLBEvv
*/