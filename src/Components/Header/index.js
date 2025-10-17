import mas from '../../img/more-horizontal.svg';
import atras from '../../img/chevron-left.svg';
import siguiente from '../../img/chevron-right.svg';

const Header = () => {
    return (
        <>
            <article className="header">
                <section className="header-nav">
                    <div className="header-nav-i">
                        <div className="header-nav-i-acciones">
                            <i><img src={mas} alt="Más"/></i>
                            <i><img src={atras} alt="Atras"/></i>
                            <i><img src={siguiente} alt="siguiente"/></i>
                        </div>
                    </div>
                </section>
            </article>
        </>        
    )
}

export default Header;