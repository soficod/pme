import React from 'react';
import styles from '../../../styles/admin/Menu.module.css';
import { VerifiedUser } from '@material-ui/icons';
import { Dashboard } from '@material-ui/icons';
import { ArrowRight } from '@material-ui/icons';
import MenuItem from './MenuItem';
import { BookTwoTone } from '@material-ui/icons';
import { EventAvailableTwoTone } from '@material-ui/icons';
import { Description } from '@material-ui/icons';
const Menu = () => 
{
    return(
        <div className={styles.menuContainer}>
            <img src="/images/pmei-logo-simplified.png" alt="PMEI Logo" />
            <div className={styles.panelContainer}>
                <MenuItem
                    title="Dashboard"
                    IconLeft={Dashboard}
                    subMenu={[]}
                    link="/admin/dashboard"
                    IconRight={null}
                />

                <MenuItem
                    title="Confirmation d'utilisateurs"
                    IconLeft={VerifiedUser}
                    subMenu={[]}
                    link="/admin/confirm-users"
                    IconRight={null}
                />

                <MenuItem
                    title="Confirmation d'évènements"
                    IconLeft={EventAvailableTwoTone}
                    subMenu={[]}
                    link="/admin/confirm-events"
                    IconRight={null}
                />

                <MenuItem
                    title="Gestion d'articles"
                    IconLeft={BookTwoTone}
                    subMenu={[{
                        title: "Ajouter un article",
                        link: "/admin/add-article"
                    },
                    {
                        title: "Liste des articles",
                        link: "/admin/articles-list"
                    }]}
                    link="#"
                    IconRight={ArrowRight}
                />

                <MenuItem
                    title="Gestion de documents"
                    IconLeft={Description}
                    subMenu={[{
                        title: "Ajouter un document",
                        link: "/admin/add-document"
                    },
                    {
                        title: "Liste des documents",
                        link: "/admin/documents-list"
                    }]}
                    link="#"
                    IconRight={ArrowRight}
                />

                <MenuItem
                    title="Gestion des études"
                    IconLeft={Description}
                    subMenu={[{
                        title: "Ajouter une étude",
                        link: "/admin/add-study"
                    },
                    {
                        title: "Liste des études",
                        link: "/admin/studies-list"
                    }]}
                    link="#"
                    IconRight={ArrowRight}
                />
            </div>
        </div>
    )
}

export default Menu;