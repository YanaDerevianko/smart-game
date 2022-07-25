import scss from './PageTitle.module.scss';


export const PageTitle = ({text}) => {
    return <h1 className={scss.title}>{text}</h1>
}