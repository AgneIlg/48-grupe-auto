import style from './AutoList.module.css'
import { AutoCard } from './AutoCard';

export function PageHome () {
    return(
<section className={style.autoList}>
    <h2>ALL AUTO SKELBIMU LIST CONTENT</h2>
    <AutoCard/>
    <AutoCard/>
    <AutoCard/>
    <AutoCard/>
    <AutoCard/>
    <AutoCard/>
    <AutoCard/>
</section>
    )
}

export { AutoList };