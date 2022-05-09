import React from 'react';
import Qualitie from "./qualitie";
import Bookmark from "./bookmark"

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    bookmark,
    onToggleBookMark
}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>
                {qualities.map(qual => (
                    <Qualitie key={qual.id} {...qual}/>
                ))}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate} /5</td>
            <td>
                <Bookmark
                    status={bookmark}
                    onClick={() => onToggleBookMark(_id)}
                />
            </td>
            <td>
                <button
                    className={"btn btn-danger"}
                    onClick={() => onDelete(_id)}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};

export default User;