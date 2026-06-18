'use client'

import React from 'react'
import { useEffect, useState } from 'react'



const UserPage = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {

        async function fetchUser() {
            const res = await fetch("/api/example");
            const data = await res.json();
            setUser(data);
        }

        fetchUser();
    }, [])


    return (
        <div className='h-screen mt-10 mx-10'>
            {JSON.stringify(user)}
        </div>
    )
}

export default UserPage