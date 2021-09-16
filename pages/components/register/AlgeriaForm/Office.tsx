import React, { useEffect } from 'react';
import IconInput from '../../../services/IconInput';
import SelectInput from '../../../services/SelectInput';
import styles from '../../../../styles/register/Register.module.css';
import TextArea from '../../../services/TextArea';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

interface activityType {
    value: number 
    name: string
}

const Office = ({infos, setInfos, lang, zones, error}:any) => 
{
    
    const updateArea = (index:number, newArea:string) => 
    {
        let clone = [...infos.typeInfos.areas];
        clone[index] = newArea;
        setInfos({...infos, typeInfos:{...infos.typeInfos, areas: clone}});
    }

    const deleteArea = (index:number) => 
    {
        let clone = infos.typeInfos.areas;
        clone.splice(index,1)
        setInfos({...infos, typeInfos:{...infos.typeInfos, areas: clone}});
    }

    const addArea = () => 
    {
        setInfos({...infos, typeInfos:{...infos.typeInfos, areas: [...infos.typeInfos.areas, '']}});
    }

    return(
        <>
            <SelectInput
                errorMessage={typeof(error.registry_type) == "undefined" ? "": error.registry_type}
                onChange={e => setInfos({...infos, registry_type: e.target.value})}
                className={styles.input}
            >
                <option selected disabled>{lang.Register.default_select_regType}</option>
                <option value="registry">{lang.Register.registry}</option>
                <option value="approval">{lang.Register.approval}</option>
            </SelectInput>

            <IconInput 
                type="text"
                placeholder={lang.Register.registry}
                errorMessage={typeof(error.registry) == "undefined" ? "": error.registry}
                onChange={e => setInfos({...infos, registry: e.target.value})}
                className={styles.input}
                required
            />

            <IconInput 
                type="text"
                placeholder={lang.Register.legal_form}
                errorMessage={typeof(error.legal_form) == "undefined" ? "": error.legal_form}
                onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, legal_form: e.target.value}})}
                className={styles.input}
                required
            />

            <div className={styles.sameLine}>
                <div>
                    <IconInput 
                        type="text"
                        placeholder={"NIF"}
                        errorMessage={typeof(error.nif) == "undefined" ? "": error.nif}
                        onChange={e => setInfos({...infos, nif: e.target.value})}
                        className={styles.input}
                        required
                    />
                </div>

                <div>
                    <IconInput 
                        type="text"
                        placeholder={"NIS"}
                        errorMessage={typeof(error.nis) == "undefined" ? "": error.nis}
                        onChange={e => setInfos({...infos, nis: e.target.value})}
                        className={styles.input}
                        required
                    />
                </div>
            </div>

            <div className={styles.sameLine}>
                {
                    typeof(infos.typeInfos.areas) != "undefined" && 
                    infos.typeInfos.areas.map((area:string, index:number) => {
                        return(
                            <div className={styles.emailsContainer}>
                                { index > 0 &&
                                    <div className={styles.deleteBtnContainer}>
                                        <HighlightOffIcon
                                            className={styles.deleteBtn}
                                            onClick={e => deleteArea(index)}
                                        />
                                    </div>
                                }

                                <SelectInput
                                    placeholder={lang.Register.area}
                                    errorMessage={typeof(error.area) == "undefined" ? "": error.area}
                                    onChange={e => updateArea(index, e.target.value)}
                                    className={styles.input}
                                >
                                    <option selected disabled>{lang.Register.area}</option>
                                    {
                                        zones.map((zone:activityType) => 
                                        {
                                            return(
                                                <optgroup label={zone.name}>
                                                    {
                                                        zones.map((z:activityType) => 
                                                        {
                                                            return(
                                                                <option value={z.value}>{z.name}</option>
                                                            )
                                                        })
                                                    }
                                                </optgroup>
                                            )
                                        })
                                    }
                                </SelectInput>
                            </div>
                        )
                    })
                }
                <div>
                    <button 
                        className={styles.addArea}
                        onClick={e => addArea()}
                    >
                        {lang.Register.addArea}
                    </button>
                </div>
            </div>
            
            <IconInput 
                type="text"
                placeholder={"CEO"}
                errorMessage={typeof(error.ceo) == "undefined" ? "": error.ceo}
                onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, ceo: e.target.value}})}
                className={styles.input}
                required
            />

            <IconInput 
                type="number"
                placeholder={lang.Register.staff_number}
                errorMessage={typeof(error.staff_number) == "undefined" ? "": error.staff_number}
                onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, staff_number: e.target.value}})}
                className={styles.input}
                required
            />

            <div className={styles.sameLine}>
                <div>
                    <IconInput 
                        type="text"
                        placeholder={"ID CNAS"}
                        errorMessage={typeof(error.cnas_id) == "undefined" ? "": error.cnas_id}
                        onChange={e => setInfos({...infos, cnas_id: e.target.value})}
                        className={styles.input}
                        required
                    />
                </div>

                <div>
                    <IconInput 
                        type="text"
                        placeholder={"ID CASNOS"}
                        errorMessage={typeof(error.casnos_id) == "undefined" ? "": error.casnos_id}
                        onChange={e => setInfos({...infos, casnos_id: e.target.value})}
                        className={styles.input}
                        required
                    />
                </div>
            </div>

            <IconInput 
                type="date"
                label={lang.Register.creation_date}
                errorMessage={typeof(error.creation_date) == "undefined" ? "": error.creation_date}
                onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, creation_date: e.target.value}})}
                className={styles.input}
                required
            />
            
            <br/>

            <TextArea 
                placeholder={lang.Register.description}
                errorMessage={typeof(error.description) == "undefined" ? "": error.description}
                onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, description: e.target.value}})}
                className={styles.input}
            />
        </>
    );
}

export default Office;