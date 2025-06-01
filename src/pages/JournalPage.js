import JournalGrid from "../components/JournalGrid";
import '../css/JournalPage.css'

export default function JournalPage(){
return(
  <div>
    <h1 className='jtitle'>Journal</h1>
    <JournalGrid i = {0}/>
  </div>
)
}