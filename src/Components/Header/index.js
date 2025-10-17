import logotipo from '../../img/logotipo.PNG';

const Header = () => {
    return (
        <>
          <header className='header'>
            <img src={logotipo} alt='Logotipo'/>  
            <section className='header-menu'>
                <a href="/home" className='header-menu__link'>Inicio</a>
                <a href="/home" className='header-menu__link'>Acerca de nosotros</a>
                <a href="/home" className='header-menu__link'>Blog</a>
                <a href="/home" className='header-menu__link'>Contacto</a>
                <a href="/home" className='header-menu__link'>Proyectos</a>
            </section>
          </header>
        </>        
    )
}

export default Header;