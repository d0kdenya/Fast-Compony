import React, { useState } from 'react'
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    const handleDelete = userId => {
        setUsers(prevState => prevState.filter(user => user !== userId))
    }
    const spanBadgePhrase = number => {
        if (number === 0) {
            return <span className="badge bg-danger mb-2" style={{fontSize: '1.5em'}}>{renderPhrase(number)}</span>
        } else {
            return <span className="badge bg-primary mb-2" style={{fontSize: '1.5em'}}>{renderPhrase(number)}</span>
        }
    }
    const renderPhrase = number => {
        if (number === 0) {
            return `Никто с тобой не тусанёт`
        } else if (number > 2 && number < 4) {
            return `${number} человека тусанёт с тобой сегодня`
        } else {
            return `${number} человек тусанёт с тобой сегодня`
        }
    }
    const renderUsers = (users) => {
        console.log(users)
        return users.map(user => (
            <tr key={user}>
                <th scope="row">{user.name}</th>
                <td>{renderQualities(user)}</td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}/5</td>
                <td><button className="btn btn-danger" onClick={() => handleDelete(user)}>delete</button></td>
            </tr>
        ))
    }
    const renderQualities = user => {
        return user.qualities.map(qual => (
            <span className={renderStyleForQualities(qual.color)}>{qual.name}</span>
        ))
    }
    const renderStyleForQualities = color => {
        return 'badge m-lg-1 bg-' + color
    }

    if (!users.length) return (
        <>
            {spanBadgePhrase(users.length)}
        </>
    )

    return (
        <>
            {spanBadgePhrase(users.length)}
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col"> </th>
                </tr>
                </thead>
                <tbody>
                    {renderUsers(users)}
                </tbody>
            </table>
        </>
    )
}

export default Users