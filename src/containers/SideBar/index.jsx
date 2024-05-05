import React from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from '../../components/SearchBar';
import ProfileInfo from '../../components/ProfileInfo';
import NavLinkButton from '../../components/NavLinkButton';

import { faHome, faList } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h1 className='heading'>Watchlists</h1>
                <SearchBar hideSubmitButton />
                <div className="sidebar-home-btn">
                    <NavLinkButton icon={faHome} to={'/'} onClick={() => navigate('/')} >Home</NavLinkButton>
                </div>
                <hr />
                <div className="sidebar-nav">
                    <div className="sidebar-home-btn">
                        <NavLinkButton icon={faList} to='/my-list' onClick={() => navigate('/my-list')}> My List</NavLinkButton>
                    </div>
                </div>
            </div>
            <div className="sidebar-profile">
                <ProfileInfo />
            </div>
        </div>
    );
};

export default Sidebar;