import React, { useEffect } from 'react';
import IconInput from '../../../services/IconInput';
import SelectInput from '../../../services/SelectInput';
import styles from '../../../../styles/register/Register.module.css';
import TextArea from '../../../services/TextArea';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const ExpertForm = ({infos, setInfos, lang, zones, error}:any) => 
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
                onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, registry_type: e.target.value}})}
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
                onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, registry: e.target.value}})}
                className={styles.input}
                required
            />

            <div className={styles.sameLine}>
                <div>
                    <IconInput 
                        type="text"
                        placeholder={"NIF"}
                        errorMessage=""
                        onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, nif: e.target.value}})}
                        className={styles.input}
                        required
                    />
                </div>

                <div>
                    <IconInput 
                        type="text"
                        placeholder={"NIS"}
                        errorMessage={typeof(error.nif) == "undefined" ? "": error.nif}
                        onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, nis: e.target.value}})}
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
                                        zones.map((zone:any) => 
                                        {
                                            return(
                                                <optgroup label={zone.name}>
                                                    {
                                                        zones.map((z:any) => 
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

            <div className={styles.sameLine}>
                <div>
                    <IconInput 
                        type="text"
                        placeholder={"ID CNAS"}
                        errorMessage={typeof(error.cnas_id) == "undefined" ? "": error.cnas_id}
                        onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, cnas_id: e.target.value}})}
                        className={styles.input}
                        required
                    />
                </div>

                <div>
                    <IconInput 
                        type="text"
                        placeholder={"ID CASNOS"}
                        errorMessage={typeof(error.casnos_id) == "undefined" ? "": error.casnos_id}
                        onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, casnos_id: e.target.value}})}
                        className={styles.input}
                        required
                    />
                </div>
            </div>
            
            <TextArea 
                placeholder={lang.Register.description}
                errorMessage={typeof(error.description) == "undefined" ? "": error.description}
                onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, description: e.target.value}})}
                className={styles.input}
            />
        </>
    );
}

export default ExpertForm;