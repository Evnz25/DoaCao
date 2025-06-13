import { useState } from "react";
import axios from "axios";
import NavbarTop from "../Navbar/NavbarTop"
import style from './RegisterEmployeePage.module.css'


function RegisterEmployee(){
    const[employee, setEmployee] = useState({
        basic_info_employee: {
            name: '',
            cpf: '',
            phone: '',
            email: '',
        },
        address_employee: {
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

        if (["cep", "city", "neighborhood", "number"].includes(name)) {
            setEmployee((prev) => ({
                ...prev, address_employee: {
                    ...prev.address_employee, [name]: value
                },
            }));
        } else {
            setEmployee((prev) => ({
                ...prev, basic_info_employee: {
                    ...prev.basic_info_employee, [name]: value
                },
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("basic_info_employee", JSON.stringify(employee.basic_info_employee));
        formData.append("address_employee", JSON.stringify(employee.address_employee));

        try {
            const res = await axios.post("http://localhost:8080/employee", formData, {
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
            <div className={style.basicInformationEmployee}>
                <div className={style.perfilEmployee}>
                    <h2 className={style.informationTitle}>Cadastro do funcionário</h2>
                </div>
                <div className={style.characteristicsEmployee}>
                    <input name="name" placeholder="Nome" onChange={handleChange} />
                    <hr />
                    <input name="cpf" placeholder="CPF" onChange={handleChange} />
                    <hr />
                    <input name="phone" placeholder="Telefone" onChange={handleChange} />
                    <hr />
                    <input name="email" placeholder="Email" onChange={handleChange} />
                </div>
            </div>
            <div className={style.addressEmployee}>
                <div className={style.addressEmployeeTitle}>
                    <h2 className={style.addressTitle}>Endereço</h2>
                </div>
                <div className={style.addressEmployeeData}>
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
                <div className={style.buttons}>
                    <button type="submit">Cadastrar</button>
                </div>
            </div>
            </form>
            </>
        );
}

export default RegisterEmployee;