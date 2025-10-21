import logotipo from '../../img/Gemini_Generated_Image_m29wihm29wihm29w.png';

const Header = () => {
    return (
        <>
          <header className='header'>
            <img className='img' src={logotipo} alt='Logotipo'/>  
            <section className='header-menu'>
                <a href="/home" className='header-menu__link'>Inicio</a>
                <a href="/home" className='header-menu__link'>Sobre nosotros</a>
                <a href="/home" className='header-menu__link'>Blog</a>
                <a href="/home" className='header-menu__link'>Proyectos</a>
                <a href="/home" className='header-menu__link'>Contacto</a>
            </section>
          </header>
        </>        
    )
}

export default Header;