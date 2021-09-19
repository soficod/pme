import React from 'react';
import Head from 'next/head';
import Menu from './menu/Menu';
import styles from '../../styles/admin/Admin.module.css';
import dstyles from '../../styles/admin/Dashboard.module.css';

const Dashboard = () => 
{
    return(
        <div className={styles.admin}> 
            <Menu/>
        </div>
    )
}

export default Dashboard;