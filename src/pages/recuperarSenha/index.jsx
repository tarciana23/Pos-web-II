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


export default function RecuperarSenha() {
    const [formData, setFormData] = useState({ email: "" });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Solicitação de recuperação de senha", formData);
        // Aqui você pode adicionar a lógica para enviar o email de recuperação
    };

    return (
        <Container>
            <FormSection>
                <FormTitle title={<span>Recupere sua <strong>senha!</strong></span>} />
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
                    <FormButton type="submit">
                        Enviar link de recuperação
                    </FormButton>
                </Form>
                <RegisterLink href="/login" text="Lembrou a senha? Faça seu login!" />
            </FormSection>
            <ImageSection/>
        </Container>
    );
}