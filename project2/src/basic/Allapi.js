import { useState } from "react";
import { useEffect } from "react";

const AllApi = () => {

    let [Userlist, updateUserList] = useState([])
    let [Commentlist, UpdateCommentlist] = useState([])
    let [Ablumlist, UpdateAblumlist] = useState([])
    let [Todolist, UpdateTodolist] = useState([])

    const getUserList = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(user => {
                updateUserList(user)
            })
    }

    const getCommentlist = () => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(Comment => {
                UpdateCommentlist(Comment)
            })
    }

    const getAblumlist = () => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(response => response.json())
            .then(album => {
                UpdateAblumlist(album)
            })
    }

    const getTodolist = () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(todo => {
                UpdateTodolist(todo)
            })
    }

    useEffect(() => {         //onload page event like      // it is use to give the data infinite type and have to put blank array for run once
        getUserList()
        getCommentlist()
        getTodolist()
        getAblumlist()
    }, [])


    return (
        <section>
            < h2 > Recent User: {Userlist.length} </h2 >
            <div id="style">
                {
                    Userlist.map((userL, index) => {
                        return (
                            <p key={index} className="myblog">{userL.email}</p>
                        )
                    })
                }
            </div>

            < h2 > Recent Comments: {Commentlist.length}</h2 >
            <div id="style">
                {
                    Commentlist.map((comment, index) => {
                        return (
                            <p key={index} className="myblog">{comment.body}</p>
                        )
                    })
                }
            </div>

            < h2 > Recent Album: {Ablumlist.length}</h2 >
            <div id="style">
                {
                    Ablumlist.map((album, index) => {
                        return (
                            <p key={index} className="myblog">{album.title}</p>
                        )
                    })
                }
            </div>

            < h2 > Recent Todo: {Todolist.length}</h2 >
            <div id="style">
                {
                    Todolist.map((todo, index) => {
                        return (
                            <p key={index} className="myblog">{todo.title}</p>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default AllApi