export interface SubmenuTypes {
    title: string
    submenu: Submenu[]
  }
  
  export interface Submenu {
    title: string
    submenu?: Submenu2[]
  }
  
  export interface Submenu2 {
    title: string
    submenu: Submenu3[]
  }
  
  export interface Submenu3 {
    title: string
  }