import { useState } from "react";

const PracticeOne = () => {
    let [alluser, UpdateUser] = useState([])
    let [allbook, UpdateBook] = useState([])
    let [allcompnay, UpdateCompnay] = useState([])
    let [allemployee, UpdateEmployee] = useState([])

    const one = () => {
        fetch("user.json")
            .then(response => response.json())
            .then(data => {
                UpdateUser(data)
            })
    }

    const two = () => {
        fetch("emp.json")
            .then(response => response.json())
            .then(E => {
                UpdateEmployee(E)
            })
    }

    const three = () => {
        fetch("compnay.json")
            .then(response => response.json())
            .then(C => {
                UpdateCompnay(C)
            })
    }

    const four = () => {
        fetch("book.json")
            .then(response => response.json())
            .then(B => {
                UpdateBook(B)
            })
    }

    return (
        <section id='BOX'>
            <div class="B">
                <h3> User Data </h3>
                <div id="box2">
                    <div>
                        {alluser.map((user, index) => {
                            return (
                                <div key={index}>
                                    {user}
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
                <button className="btn" onClick={one}> Save User </button>

            </div>

            <div class="B">
                <h3> Employee Data </h3>
                <div id="box1">
                    <div>
                        {
                            allemployee.map((E, index) => {
                                return (
                                    <div key={index}>
                                        <p>{E.name}</p>
                                        <p>{E.age}</p>
                                        <p>{E.company}</p>
                                        <p> {E.address}</p>
                                        <p>{E.phone_number}</p>
                                        <p>{E.email}</p>
                                        <p>{E.emp_id}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <button className="btn" onClick={two}> Save Employee </button>
            </div>

            <div class="B">
                <h3> Book Data </h3>
                <div id="box1">
                    <p>
                        {
                            allbook.map((B, index) => {
                                return (
                                    <div key={index}>
                                        <p>{B.name}</p>
                                        <p>{B.author}</p>
                                        <p>{B.price}</p>
                                        <p>{B.publisher}</p>
                                        <p>{B.year}</p>
                                    </div>
                                )
                            })
                        }
                    </p>
                </div>
                <button className="btn" onClick={four}> Save Book </button>

            </div>

            <div class="B">
                <h3> Compnay Data </h3>
                <div id="box2">
                    <p>
                        {
                            allcompnay.map((C, index) => {
                                return (
                                    <div key={index}>
                                        {C}
                                    </div>
                                )
                            })
                        }
                    </p>
                </div>
                <button className="btn" onClick={three}> Save Company </button>

            </div>




        </section>
    )
}
export default PracticeOne