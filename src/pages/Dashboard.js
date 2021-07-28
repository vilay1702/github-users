import React from 'react'
import { Info, Repos, User, Search, Navbar } from '../components';
import {loadingImage} from '../images/githubLogin.png';

const Dashboard = () => {
    return (
        <main>
            <Navbar></Navbar>
            <Search />
            <Info />
            <User />
            <Repos />
        </main>
    )
}

export default Dashboard
