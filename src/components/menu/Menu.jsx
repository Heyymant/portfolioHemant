import './menu.scss'

export default function Menu({menuOpen , setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active" )}>
        <ul>
            <li onClick={()=> setMenuOpen(false)}>
                <a href='#intro'>Intro</a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
                <a href='#portfolio'>Portfolio</a>
            </li>
            {/* <li ionClick={()=> setMenuOpen(false)}>
                <a href='#testimonials'>Testimonials</a>
            </li> */}
            <li onClick={()=> setMenuOpen(false)}>
                <a href='#work'>Work</a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
                <a href='#contacts'>Contact</a>
            </li>
        </ul>
    </div>
  )
}
