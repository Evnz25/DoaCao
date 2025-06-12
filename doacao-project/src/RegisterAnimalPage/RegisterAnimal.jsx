import { useState } from "react";
import axios from "axios";
import NavbarTop from "../Navbar/NavbarTop"
import style from './RegisterAnimalPage.module.css'
import uploadPic from "../assets/upload.png"


function RegisterAnimal(){
    const[animal, setAnimal] = useState({
        basic_info: {
            name: '',
            specie: '',
            age: '',
            gender: '',
            race: '',
        },
        imagePath: null,
        medical_conditions: {
            vaccine: '',
            castrated: '',
            injuries: '',
            sickness: '',
            medicine: ''
        }
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === "file"){
            setAnimal((prev) => ({
                ...prev, [name]: files[0],
            }));
        } else if (["castrated", "injuries", "sickness", "medicine", "vaccine"].includes(name)) {
            setAnimal((prev) => ({
                ...prev, 
                medical_conditions: {
                    ...prev.medical_conditions, [name]: value
                },   
            }));
        } else {
            setAnimal((prev) => ({
                ...prev, basic_info: {
                    ...prev.basic_info, [name]: value
                },
            }));
        }
    };

    const addVaccine = () => {
        setAnimal((prev) => ({
            ...prev, medical_conditions: {
                ...prev.medical_conditions,
                vaccine: [...prev.medical_conditions.vaccine, ""]
            }
        }));
    };  

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("basic_info", JSON.stringify(animal.basic_info));
        formData.append("medical_conditions", JSON.stringify(animal.medical_conditions));
        formData.append("imagePath", animal.imagePath);

        try {
            const res = await axios.post('http://localhost:8080/animal', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("Cadastrado", res.data);
        } catch (err) {
            console.error("Erro de cadastro", err);
        }
    };  
    
    return(
        <>
        <NavbarTop />
        <form onSubmit={handleSubmit}>
            <div className={style.basicInformation}>
                <div className={style.perfilAnimal}>
                    <h2 className={style.informationTitle}>Cadastro</h2>
                    <img className={style.informationPhoto} src={uploadPic} alt={"Sem foto"} ></img>
                </div>
                <div className={style.characteristicsAnimal}>
                    <input name="name" placeholder="Nome" onChange={handleChange} />
                    <hr />
                    <input name="age" placeholder="Idade" onChange={handleChange} />
                    <hr />
                    <input name="gender" placeholder="Gênero" onChange={handleChange} />
                    <hr />
                    <input name="specie" placeholder="Espécie" onChange={handleChange} />
                    <hr />
                    <input name="race" placeholder="Raça" onChange={handleChange} />
                    <hr />
                    <input type="file" accept="image/*" name="imagePath" onChange={handleChange} />
                </div>
            </div>
            <div className={style.medicalCondition}>
                <h1 className={style.vaccines}>
                    Vacinas:
                    <input name="vaccine" placeholder="Vacinas" onChange={handleChange} /> 
                </h1>
                {/*<button type="button" onClick={addVaccine}> Adicionar vacina</button>*/}
                <hr />
                <h2 className={style.observationMedical}>
                    Observações:
                        <p className={style.observationItens}></p>
                                <input name="injuries" placeholder="Ferimentos" onChange={handleChange} />
                                <hr />
                                <input name="sickness" placeholder="Doenças" onChange={handleChange} />
                                <hr />
                                <input name="medicine" placeholder="Medicamentos" onChange={handleChange} />
                                <hr />
                                <input name="castrated" placeholder="Castrado" onChange={handleChange} />
                        </h2>
                        <div className={style.buttons}>
                            <button type="submit">Cadastrar</button>
                        </div>
            </div>
    </form>
    </>
    );
}

export default RegisterAnimal;