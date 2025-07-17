import { useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import NavbarTop from "../Navbar/NavbarTop"
import style from './RegisterClientPage.module.css'


function RegisterClient(){
    const navigate = useNavigate();
    const { animalId } = useParams();
    const[client, setClient] = useState({
        basic_info_client: {
            name: '',
            cpf: '',
            phone: '',
            email: '',
        },
        address_client: {
            cep: '',
            state: '',
            city: '',
            street: '',
            neighborhood: '',
            number: ''
        }
    });

    const handleChange = (e) => {
        const { name, value, type, file } = e.target;

        if (["cep", "state", "city", "street", "neighborhood", "number"].includes(name)) {
            setClient((prev) => ({
                ...prev, address_client: {
                    ...prev.address_client, [name]: value
                },
            }));
        } else {
            setClient((prev) => ({
                ...prev, basic_info_client: {
                    ...prev.basic_info_client, [name]: value
                },
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("client_info", JSON.stringify(client.basic_info_client));
        formData.append("address_info", JSON.stringify(client.address_client));

        formData.append("animalId", animalId);

         try {
            const res = await axios.post("http://localhost:8080/api/donations/initiate", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log("Doação iniciada com sucesso!", res.data);
        } catch (err) {
            console.error("Erro ao iniciar doação", err);
        }
    };

        return(
            <>
            <NavbarTop />
            <form onSubmit={handleSubmit}>
            <div className={style.basicInformationClient}>
                <div className={style.perfilClient}>
                    <h2 className={style.informationTitle}>Cadastro da pessoa para adoção</h2>
                </div>
                <div className={style.characteristicsClient}>
                    <input name="name" placeholder="Nome" onChange={handleChange} />
                    <hr />
                    <input name="cpf" placeholder="CPF" onChange={handleChange} />
                    <hr />
                    <input name="phone" placeholder="Telefone" onChange={handleChange} />
                    <hr />
                    <input name="email" placeholder="Email" onChange={handleChange} />
                </div>
            </div>
            <div className={style.addressClient}>
                <div className={style.addressClientTitle}>
                    <h2 className={style.addressTitle}>Endereço</h2>
                </div>
                <div className={style.addressClientData}>
                    <input name="cep" placeholder="CEP" onChange={handleChange} />
                    <hr />
                    <input name="state" placeholder="Estado" onChange={handleChange} />
                    <hr />
                    <input name="city" placeholder="Cidade" onChange={handleChange} />
                    <hr />
                    <input name="street" placeholder="Rua" onChange={handleChange} />
                    <hr />
                    <input name="neighborhood" placeholder="Bairro" onChange={handleChange} />
                    <hr />
                    <input name="number" placeholder="Número" onChange={handleChange} />
                </div>
                <div className={style.buttons} onClick={() => navigate('/')} >
                    <button type="submit"> Cadastrar </button>
                </div>
            </div>
            </form>
            </>
        );
}

export default RegisterClient;