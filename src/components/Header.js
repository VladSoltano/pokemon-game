import style from './Header.module.css';

const Header = (props) => {
    return (
        <header className={style.root}>
            <div className={style.forest}></div>
            <div className={style.container}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </header>
    );
}

export default Header;