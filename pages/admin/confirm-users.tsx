import React, { useState, useEffect } from 'react';  
import styles from '../../styles/admin/Admin.module.css';
import dstyles from '../../styles/admin/Confirm.module.css';
import Menu from './menu/Menu';
import { CheckTwoTone } from '@material-ui/icons';
import Close from '@material-ui/icons/Close';
import { Visibility } from '@material-ui/icons';
import Details from './user/Details';
import { color_set } from '../../pme-data/color-set';
import Swal from 'sweetalert2';
const userList = [
    {
        name: "Digital Centurion",
        type: "company",
        email: "anisrouane2@gmail.com",
        wilaya: "35",
        approval: "13ad5",
        ceo: "Anis ROUANE",
        sexe: "man",
        slug: "anis-rouane",
        image:"/images/men.jpg",
        bgColor: color_set[getRandomInt(color_set.length)]
    },
    {
        name: "Digital Centurion",
        type: "union",
        email: "anisrouane@hotmail",
        wilaya: "16",
        approval: "13ad5",
        ceo: "Anis ROUANE",
        sexe: "man",
        image: null,
        bgColor: color_set[getRandomInt(color_set.length)]
    },
    {
        name: "Educe-it",
        type: "company",
        email: "educe-it@gmail.com",
        wilaya: "35",
        approval: "13ad5",
        ceo: "Anis ROUANE",
        sexe: "man",
        image:null,
        bgColor: color_set[getRandomInt(color_set.length)]
    }
]

function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
}

const ConfirmUsers = () => 
{
    const [initialList, setInitialList] = useState(userList);
    const [popupOn, setPopupOn] = useState(false);
    const [searchByName, setSearchByName] = useState('');
    const [searchByWilaya, setSearchByWilaya] = useState('');
    const [searchByType, setSearchByType] = useState('');
    const [users, setUsers] = useState(userList);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => 
    {
        applyFilter();
    }, [searchByName, searchByType, searchByWilaya]);

    const acceptUser = (user:any) => 
    {
        setInitialList(() => initialList.filter(usr => usr.email !== user.email));
        applyFilter();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `L'utilisateur a été accepté`,
            showConfirmButton: false,
            timer: 1500
        })
    }
    
    const applyFilter = () => 
    {
        let resultFilter = initialList;
        if(searchByName)
        {
            resultFilter = resultFilter.filter(rf => rf.name.toLowerCase().includes(searchByName.toLowerCase()));
        }

        if(searchByWilaya)
        {
            resultFilter = resultFilter.filter(rf => rf.wilaya == searchByWilaya);
        }

        if(searchByType)
        {
            resultFilter = resultFilter.filter(rf => rf.type == searchByType);
        }

        setUsers(resultFilter);
    }
    return(
        <>
            <div className={styles.admin}>
                <Menu/>
                <Details on={popupOn} setOn={setPopupOn} user={selectedUser}/>
                <div className={styles.container}>
                    <div className={dstyles.filter}>
                        <h3>Filtres</h3>
                        <div className={dstyles.filterInputs}>
                            <input 
                                type="text" 
                                placeholder="Chercher par nom"
                                onChange={e => setSearchByName(e.target.value)}
                            />
                            <select onChange={e => setSearchByType(e.target.value)}>
                                <option selected disabled>Chercher par type</option>
                                <option value="">Tout</option>
                                <option value="company">Company</option>
                                <option value="expert">Expert</option>
                                <option value="office">Office</option>
                                <option value="union">Union</option>
                            </select>
                            <select onChange={e => setSearchByWilaya(e.target.value)}>
                                <option selected disabled>Chercher par Wilaya</option>
                                <option value="">Tout</option>
                                <option value="35">35 - Boumerdès</option>
                                <option value="16">16 - Alger</option>
                                <option value="23">23 - Annaba</option>
                            </select>
                        </div>
                    </div>

                    <div className={dstyles.list}>

                    <table>
                        <tr>
                            <th></th>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Type</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        {
                        users.map((user:any) => 
                        {
                            return(
                                <>
                                    <tr>
                                        <td>
                                            {
                                                user.image ?
                                                <div 
                                                    className={dstyles.pfp}
                                                    style={{
                                                        backgroundImage: `url(${user.image})`
                                                    }}
                                                ></div>
                                                :
                                                <button className={dstyles.pfp} style={{backgroundColor: user.bgColor}}>
                                                    {user.name[0].toUpperCase()+" "+user.name[1].toUpperCase() }
                                                </button>
                                            }
                                        </td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.type}</td>
                                        <td>
                                            <CheckTwoTone 
                                                style={{
                                                    cursor:"pointer",
                                                    color: "limegreen"
                                                }}
                                                onClick={e => acceptUser(user)}
                                            />
                                        </td>
                                        <td>
                                            <Close 
                                                style={{
                                                    cursor:"pointer",
                                                    color: "red"
                                                }}
                                                onClick={e => acceptUser(user)}
                                            />
                                        </td>
                                        <td>
                                            <Visibility
                                                onClick={e => {
                                                    setSelectedUser(() => user);
                                                    setPopupOn(true);
                                                }}
                                                style={{
                                                    cursor:"pointer"
                                                }}
                                            />
                                        </td>
                                    </tr>     
                                </>
                            )
                        })
                        }
                    </table>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmUsers;