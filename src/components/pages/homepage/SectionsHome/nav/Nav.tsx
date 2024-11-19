
import { NavLink } from 'react-router-dom'
import data from '../../../../../mock/data.json'
const nav =  data.entireHome.nav_options

const Nav = () => {

  return (
    <div className="flex justify-between  max-w-[900px] mx-auto pt-[1rem] ">
        <ul  >
          <div className=" ul-cath">
              <div className="inline-flex flex-wrap content-center height-cath">

                  <img src="/frame botom hamburguesa.svg" alt=""/>
                  <b  className=" text-red-500 text-decoration  dark:text-white  ">Categorias</b>
              </div>
          </div>
        </ul>
          
        {
          nav.map((item) => (
            <ul className='' key={item.id}>
              <NavLink  to={item.url}  className={({ isActive, isPending }) =>
              isPending ? "text-blue-500" : isActive ? "text-red-500 dark:text-white" :
                "text-black" }
                >{item.title}</NavLink>
            </ul>
          ))
        }
</div>
  )
}

export default Nav