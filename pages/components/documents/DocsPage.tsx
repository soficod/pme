import React from 'react';
import styles from '../../../styles/documents/Documents.module.css';
import SearchIcon from '@material-ui/icons/Search';

const DocsPage = ({documents}:any) => 
{
    return(
        <div className={styles.docsContainer}>
            <div className={styles.docsList}>
                <h1>Nos documents</h1>
                {
                    documents.map((doc:any) => 
                    {
                        return(
                            <a href={doc.slug}>
                                <div className={styles.doc}>
                                    <div 
                                        className={styles.docImage}
                                        style={{
                                            backgroundImage: `url(${doc.image})`
                                        }}
                                    >   
                                    </div>
                                    <div className={styles.docInfo}>
                                        <h1>{doc.title}</h1>
                                        <p className={styles.metaInfo}>
                                            Posté le : {doc.date}
                                            &nbsp;&nbsp;&nbsp;
                                            Format : {doc.format}
                                        </p>
                                        <p className={styles.author}>
                                            {doc.description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>

            <div className={styles.filters}>
                <input type="search" placeholder="Chercher un document..."/>
                <div className={styles.searchBtn}>
                    <button>
                        <SearchIcon/>
                    </button>
                    <button>Chercher</button>
                </div>
            </div>
        </div>
    )
}

export default DocsPage;