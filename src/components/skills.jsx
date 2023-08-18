import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skills = () => {
    return ( 
        <div className='skillsComponent'>
         <h1>Skills</h1>
        
        
         <FontAwesomeIcon style={{backgroundColor: 'antiqueWhite', color: "black", margin:'15px', width:'50px', height:'50px'}}
         icon="fa-brands fa-react" spin />
         <FontAwesomeIcon style={{backgroundColor: 'antiqueWhite', color: "black", margin:'15px', width:'50px', height:'50px'}}
          icon="fa-brands fa-html5" />
          <FontAwesomeIcon style={{backgroundColor: 'antiqueWhite', color: "black", margin:'15px', width:'50px', height:'50px'}}
           icon="fa-brands fa-css3" />
          <FontAwesomeIcon style={{backgroundColor: 'antiqueWhite', color: "black", margin:'15px', width:'50px', height:'50px'}}
           icon="fa-brands fa-js" />
           <FontAwesomeIcon style={{backgroundColor: 'antiqueWhite', color: "black", margin:'15px', width:'50px', height:'50px'}}
            icon="fa-brands fa-node" />
      
         </div>
     );
}
 
export default Skills;