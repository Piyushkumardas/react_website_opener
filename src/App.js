import './styles.css'
export default function App() {
  return (
    <>
      <h1>Useful Webisite Opener</h1>
      <h3><p>Which Website would you like to open?</p></h3>
      <Button name="Google" link="https://google.com" />
      <Button name="Facebook" link="https://facebook.com"/>
      
      <Button name="Reddit" link="https://reddit.com" />
      <Button name="Kathmandu Metro" link="https://kathmandu.gov.np" />
      
      <Button name="OnlineKhabar" link="https://onlinekhabar.com" />
      <br></br>
      <Button name="Youtube" link="https://youtube.com" />
      <Button name="NepalKhabar" link="https://nepalkhabar.com"/>
      <Button name="Pininterest" link="https://pininterest.com"/>
      <Button name="WikiPedia" link="https://wikipedia.org"/>
      
  </>
  )
    
  
}

const Button = ({name, link}) => {
  return (
    <>
      <a href={link} target="_blank" > <button className='button'>{name}</button> </a> 
    </>
  )

}


