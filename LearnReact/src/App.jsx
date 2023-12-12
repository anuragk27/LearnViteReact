import { Counter } from "./componenets/Counter";
import { LearnProps } from "./componenets/props";
import { LearnUseEffect } from "./componenets/LearnUseEffect";
import { LearnUseMemo } from "./componenets/LearnUseMemo";
import { LearnMap } from "./componenets/LearnMap";
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import { Layout } from './componenets/Layout'

function App(){
    return(
        <>
            {/* < LearnUseMemo /> */}
            {/* <LearnUseEffect /> */}
            <Counter/>
             {/* <LearnProps name="Anurag Kumar" course="B.Tech" /> */}
             {/* <LearnMap/> */}
        </>
    )
}
export default App