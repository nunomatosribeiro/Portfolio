
const Projects = () => {
    return ( 
        <div className='projectsComponent'>
         <h1>Projects</h1>
        <div className='linkdironImg'>
         <a href="https://linkdiron.netlify.app/login"  target="_blank" rel="noreferrer"
         style={{ width: '100px'}}>
         <img src='firstImageHome.png' alt='project1' className='linkdironImg'/>
            <h4>LinkdIron</h4>
            <p>Full Stack App</p>
            </a>
            </div>
            <div className="fitnessImg">
            <a href="https://fitnessapp.adaptable.app/"  target="_blank" rel="noreferrer"
         style={{ width: '100px'}}>
         <img src='backgroundIMG.jpg' alt='project1' className='fitnessAppImg'/>
            <h4>FitnessApp</h4>
            <p>Back-end App</p>
            </a>
</div>
<div className="deadpoolImg">
            <a href="https://nunomatosribeiro.github.io/deadpool-vs-cows-proj/"  target="_blank" rel="noreferrer"
         style={{ width: '100px'}}>
         <img src='deadpoolImg.jpg' alt='project1' className='deadpoolImg'/>
            <h4>Deadpool Game</h4>
            <p>Front-end game</p>
            </a>

           </div>
            
        </div>
     );
}
 
export default Projects;