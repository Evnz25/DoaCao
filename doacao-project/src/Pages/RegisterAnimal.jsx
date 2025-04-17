import { useState } from "react";
import axios from "axios";

function ResgisterAnimal(){
    const[formData, setFormData] = useState({
        name: '',
        specie: '',
        age: '',
        gender: '',
        race: '',
        imagePath: '',
        vaccine: '',
        castrated: '',
        injuries: '',
        sickness: '',
        medicine: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    axios.post('http://localhost:8080/animal', formaData)
    then(res => {
        console.log("Animal cadastrado com sucesso:", res.data);
    })
    .catch(err => {
        console.error("Erro ao cadastrar animal:", err);
    })
    
    return(
        <div></div>
    );
}

export default RegisterAnimal;