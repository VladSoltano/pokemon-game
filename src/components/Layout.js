import style from './Layout.module.css';
import imageBg from '../assets/bg1.jpg';

const Layout = (props) => {
    return (
        <section className={style.root}
                 id={props.id} 
                 style={{
                            backgroundImage: `url(${imageBg})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: props.colorBg

                        }}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        <h3>{props.title}</h3>
                        <span className={style.separator}></span>
                    </div>
                    <div className={style.desc, style.full}>
                        <p>{props.desc}</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;