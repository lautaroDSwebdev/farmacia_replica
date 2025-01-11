import "./style.css"
import { FcGoogle } from "react-icons/fc";
import { useAuthState } from "react-firebase-hooks/auth";
import { Auth,  googleProvider } from "../../../firebase/firebase";
import { signOut, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {

    const [user] = useAuthState(Auth)

    const Load = <h2>Cargando...</h2>
    const [SignOut, setSignOut] = useState(false)
    const [Signin, setSignin] = useState(false)



    const signIn = () => {
        setSignin(true)
        setTimeout(async () => {
            const res = await signInWithPopup(Auth, googleProvider)
            setSignin(false)
            console.log(res)
        }, 2000)
    }

    const SignOutFun = () => {
        setSignOut(true)
        setTimeout(async () => {
            await signOut(Auth)
            setSignOut(false)
        }, 2000)
    }

    const nav = useNavigate()

    const Volver = () => {
        nav("/")
    }
    return (
        <section className='section_div'>
            <div className="login-container">
                {
                    !user ?
                        <div>
                            {
                                Signin ?
                                    Load
                                    :
                                    <h1>Iniciar sesión</h1>
                            }
                            <button onClick={signIn} className="google-btn" >
                                <b>  Continuar con Google </b>
                                <FcGoogle className="text-[25px]" />
                            </button>
                            <p className="footer-text">Al continuar, aceptas nuestros <a href="#">términos y condiciones</a>.</p>
                        </div>
                        :
                        <div className="flex flex-col">
                            {
                                SignOut ?
                                    Load
                                    :
                                    <button className="border border-gray-400 hover:bg-slate-200 rounded-md p-1" onClick={SignOutFun}>Cerrar sesión </button>
                            }
                            <b>Iniciaste sesion con la cuenta</b>
                            <div className="flex flex-col items-center">
                                <p>{user.displayName}</p>
                                <p>{user.email}</p>
                                <img className="g-img-google-login" src={user.photoURL as string} alt="Imagen Google" />
                            </div>

                            <p className="footer-text">Al continuar, aceptas nuestros <a href="#">términos y condiciones</a>.</p>
                        </div>
                }
                <button
                    className="bg-slate-400  hover:bg-slate-200 flex items-center rounded-md p-3"
                    onClick={Volver}>Salir</button>
            </div>
        </section>
    )
}

export default Login