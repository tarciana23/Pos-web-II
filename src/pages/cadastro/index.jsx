import { useState } from "react";
import Container from "../../components/Container";
import ImageSection from "../../components/ImageSection";
import FormSection from "../../components/FormSection";
import FormTitle from "../../components/FormTitle";
import Form from "../../components/Form";
import FormGroup from "../../components/FormGroup";
import FormLabel from "../../components/FormLabel";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import RegisterLink from "../../components/RegisterLink";

export default function Cadastro() {

    const [formData, setFormData] = useState({nome: "",email:"",senha:""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados do formulário", formData);
    }

    return (
        <Container>
            <ImageSection/>
            <FormSection>
                <FormTitle title={<span>Faça seu <strong>cadastro!</strong></span>} />
                <Form onSubmit={handleSubmit}>
                    <FormGroup>    
                        <FormLabel htmlFor="nome">Nome</FormLabel>
                        <FormInput 
                            type="text" 
                            id="nome" 
                            name="nome" 
                            className="form-input" 
                            value={formData.nome} 
                            onChange={handleChange} 
                            required 
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormInput 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="form-input" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="senha" >Senha</FormLabel>
                        <FormInput 
                            type="password" 
                            id="senha" 
                            name="senha" 
                            className="form-input" 
                            value={formData.senha} 
                            onChange={handleChange} 
                            required 
                        />
                    </FormGroup>
                    <FormButton type="submit">
                        Cadastrar
                    </FormButton>
                </Form>
                <RegisterLink href="/login" text="Já tem uma conta? Faça seu login!" />
            </FormSection>
        </Container>
      );
    };

    