import style from './AutoList.module.css'

export function NewestCardList () {
    return(
<section className={style.autoList}>
    <h1>NEWEST CARS LIST CONTENT </h1>
    <AutoCard/>
    <AutoCard/>
    <AutoCard/>
    <AutoCard/>
    <AutoCard/>
    <AutoCard/>
</section>
    );
}

