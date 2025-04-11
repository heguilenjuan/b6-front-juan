import { Input } from "@/components/forms/Input"
import Layout from "../Layout/Layout"

import './styles/loginPage.scss'
import { Button } from "@/components/forms/Button"
import { useForm } from "react-hook-form"

const LoginPage = () => {

    const { handleSubmit } = useForm();

    //faltaria crear la identidad del usuario aca dentro se maneja el logeo
    const handleLogin = (data: any) => {
        console.log(data)
    }

    return (
        <Layout >
            <form className="login" onSubmit={handleSubmit(handleLogin)}>
                    <label className="login-fieldset">Inicio de sesión 🍔</label>

                    <Input
                        label="Usuario*"
                        type="text"
                        id="user"
                        name="user"
                        hint="Tu nombre debe ser entre 8 y 15 caracteres"
                        minLength={8}
                        maxLength={15}
                        required
                        autoComplete="user"
                    />

                    <Input
                        label="Contraseña*"
                        type="password"
                        id="password"
                        name="password"
                        required
                        hint="Si te olvidaste la contraseña comunicate con el desarrollador."
                        autoComplete="password"
                    />

                    <Button
                        type="submit"                        
                    >Iniciar session
                    </Button>

            </form>
        </Layout>
    )
}

export default LoginPage