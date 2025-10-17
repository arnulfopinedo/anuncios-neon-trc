import logotipo from '../../img/logotipo.PNG';

const Header = () => {
    return (
        <>
          <header className='header'>
            <img src={logotipo} alt='Logotipo'/>  
            <section className='header-menu'>
                <a className='header-menu__link'>Inicio</a>
                <a className='header-menu__link'>Acerca de nosotros</a>
                <a className='header-menu__link'>Blog</a>
                <a className='header-menu__link'>Contacto</a>
                <a className='header-menu__link'>Proyectos</a>
            </section>
          </header>
        </>        
    )
}

export default Header;