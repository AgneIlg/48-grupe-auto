import { Hero } from "../components/hero"
import { NewestCardList } from "../components/auto-list/NewestCarsList";

export function PageHome () {
    return(
<main>
    <Hero />
    <NewestCardList />
</main>
    )
}

export { PageHome };