import React from 'react';
import IconInput from '../../../services/IconInput';
import SelectInput from '../../../services/SelectInput';
import styles from '../../../../styles/register/Register.module.css';
import TextArea from '../../../services/TextArea';


interface activityType {
    value: number 
    name: string
}

const CompanyForm = ({infos, setInfos, lang, error, activities}:any) => 
{
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
            
            <SelectInput 
                placeholder={lang.Register.legal_form}
                errorMessage={typeof(error.legal_form) == "undefined" ? "": error.legal_form}
                onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, legal_form: e.target.value}})}
                className={styles.input}
                required
            >
                <option selected disabled>{lang.Register.legal_form}</option>
                <option value="SPA">SPA</option>
                <option value="SARL">SARL</option>
                <option value="EURL">EURL</option>
                <option value="SNC">SNC</option>
                <option value="SCS">SCS</option>
                <option value="SCA">SCA</option>
                <option value="GPT">GPT</option>
            </SelectInput>

            

            <div className={styles.sameLine}>
                <div>
                    <IconInput 
                        type="text"
                        placeholder={"NIF"}
                        errorMessage={typeof(error.nif) == "undefined" ? "": error.nif}
                        onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, nif: e.target.value}})}
                        className={styles.input}
                        required
                    />
                </div>

                <div>
                    <IconInput 
                        type="text"
                        placeholder={"NIS"}
                        errorMessage={typeof(error.nis) == "undefined" ? "": error.nis}
                        onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, nis: e.target.value}})}
                        className={styles.input}
                        required
                    />
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

            <div className={styles.sameLine}>
                <div>
                    <SelectInput
                        placeholder={lang.Register.activity_area}
                        errorMessage={typeof(error.activity_area) == "undefined" ? "": error.activity_area}
                        onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, activity_area: e.target.value}})}
                        className={styles.input}
                    >
                        <option selected disabled>{lang.Register.activity_area}</option>
                        {
                            activities.map((activity:activityType) => 
                            {
                                return(
                                    <option value={activity.value}>{activity.name}</option>
                                )
                            })
                        }
                    </SelectInput>
                </div>

                <div>
                    <IconInput 
                        type="number"
                        placeholder={lang.Register.staff_number}
                        errorMessage={typeof(error.staff_number) == "undefined" ? "": error.staff_number}
                        onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, staff_number: e.target.value}})}
                        className={styles.input}
                        required
                    />
                </div>
            </div>

            <IconInput 
                type="text"
                placeholder={lang.Register.main_activity}
                errorMessage={typeof(error.main_activity) == "undefined" ? "": error.main_activity}
                onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, main_activity: e.target.value}})}
                className={styles.input}
                required
            />

            <IconInput 
                type="date"
                label={lang.Register.creation_date}
                errorMessage={typeof(error.creation_date) == "undefined" ? "": error.creation_date}
                onChange={e => setInfos({...infos, typeInfos:{...infos.typeInfos, creation_date: e.target.value}})}
                className={styles.input}
                required
            />
            <br/>

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

export default CompanyForm;