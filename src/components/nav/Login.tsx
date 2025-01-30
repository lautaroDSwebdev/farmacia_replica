import { useAuthState } from 'react-firebase-hooks/auth'
import { Auth } from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const [user] = useAuthState(Auth)
    const nav = useNavigate()

    const NavLogin = () => {
        nav("/login")
    }
    return (
        <div className='md:hidden flex'>
            {
                !user ?
                    <button onClick={NavLogin} className="cursor-pointer text-[12px] hover:text-red-600 font-semibold dark:text-[#d5d4d4] ">Ingresar | Registrarme</button>
                    :
                    <button className="hover:bg-slate-300  gap-3 p-2 rounded-md flex " onClick={NavLogin}>
                        <p>{user?.displayName}</p>
                        <img className="g-img-google-nav" src={user?.photoURL as string} alt="Imagen Google" />
                    </button>
            }
        </div>
    )
}
