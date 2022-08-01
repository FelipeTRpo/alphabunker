import { Navbar } from "../Home/Navbar"
import { Extractcomp } from "../Extract/Extractcomp"

export const Extract = () => {

return(
<>
    <Navbar name='Felipe Bueno' agency = '9483-4' account='15499-5' money= {String(12345678.12)}/>
    <Extractcomp />
</>)

}