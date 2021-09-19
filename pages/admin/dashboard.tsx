import React from 'react';
import Head from 'next/head';
import Menu from './menu/Menu';
import styles from '../../styles/admin/Admin.module.css';

const Dashboard = () => 
{
    return(
        <div className={styles.admin}> 
            <Menu/>
        </div>
    )
}

export default Dashboard;