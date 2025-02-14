import { useState } from "react";
import Container from "../../components/Container"
import FormSection from "../../components/FormSection"
import ImageSection from "../../components/ImageSection"
import FormTitle from "../../components/FormTitle";
import Form from "../../components/Form";
import FormGroup from "../../components/FormGroup";
import FormLabel from "../../components/FormLabel";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import RegisterLink from "../../components/RegisterLink";

export default function Login(){

    const [formData, setFormData] = useState({email:"",senha:""});
 
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados do formulário", formData);
    }

    return(
        <Container>
            <FormSection>
                <FormTitle title={<span>Faça seu <strong>login!</strong></span>} />
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormInput 
                                type="email" 
                                id="email" 
                                name="email"  
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
                                    value={formData.senha} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </FormGroup>
                            <FormButton type="submit">
                                Login
                            </FormButton>
                    </Form>
                    <FormGroup>
                        <RegisterLink href="/recuperarSenha" text="Esqueceu sua senha? Clique aqui para recuperar!" />
                        <RegisterLink href = "/cadastro" text="Não tem uma conta? Faça seu cadastro!"/>
                    </FormGroup> 
            </FormSection>
            <ImageSection/>
        </Container>
    )
}