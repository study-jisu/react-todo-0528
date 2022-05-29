import React, { useState } from "react";
import { useParams, useSearchParams } from 'react-router-dom';


const profileData = {
    jisu: {
        name: '강지수',
        description: 'backend Enginner. startup programer',
    },
    gildong: {
        name: '홍길동',
        description: '전래동화 주인공',
    }
};


const Profile = ({ match }) => {
    const { username } = useParams();
    const profile = profileData[username];
    if (!profile) {
        return <div>not exist user</div>
    }
    return (
        <>
            <h1>Profile</h1>
            { username }: {profile.name}
            <p>{profile.description}</p>
        </>
    );
};

export default Profile;
