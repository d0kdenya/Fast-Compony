import React from 'react'
import Qualitie from './qualitie'
import Bookmark from './bookmark'
import PropTypes from 'prop-types'

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
                {qualities.map((qual) => (
                    <Qualitie key={qual._id} {...qual} />
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
                    className={'btn btn-danger'}
                    onClick={() => onDelete(_id)}
                >
                    delete
                </button>
            </td>
        </tr>
    )
}
User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    rate: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    bookmark: PropTypes.bool
}

export default User
