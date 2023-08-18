import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Footer.css'
const Footer = () => {
    return ( 
        <div className='footer'>
            <h4>Looking forward to hearing from you!</h4>
            
            <a href='https://www.linkedin.com/in/nuno-ribeiro-63633390/'
            target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
            </a>
            <p>+351 918220470</p>
            <p>nunoribeiroft@outlook.com</p>
            
            <hr
        style={{
           
            width: '75%',
            
        }} />
        <h5>Made with <FontAwesomeIcon icon="fa-regular fa-heart" /> by Nuno Ribeiro</h5>
        </div>
     );
}
 
export default Footer;