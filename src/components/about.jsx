import '../App.css'
const About = () => {
    return ( 
        <div className='imgTextAbout'>
        <div className="aboutComponent">
          <div className="aboutComponentText">
        <h1>About</h1>
        <p>Hi! My name is Nuno Ribeiro and I am a junior front-end developer.  </p>
        
        <h3>Why Web Dev?</h3>
        <p>I decided to change my career for an area that will certainly lead the future. I believe changing is a part of life and it fosters personal growth, and it should happen when we feel it is time. </p>
            
            <h3>What can I bring to the table?</h3>
            <p>
            Some of my projects included technologies such as HTML, CSS, JavaScript, React and more.
            I believe to be ready to land a job in front-end and help your company grow and stand out from the market.
           driven to deliver high standard projects.</p>
           <p>Adaptability to new work environments</p>
           <p>Effective communication</p>
           <p>Always keen to learn new skills that will help me improve professionally.</p>
           <p> Overall, I am a driven and creative person, interested on taking extra responsibilities, and grow professionally.</p>
            
            <h3>Curiosities</h3>
            <p>Love Traveling</p>
            <p>Reading</p>
            <p>Playing Sports</p>

            <a href="https://drive.google.com/file/d/17DbklcH1zq6scNFHVXCtfoQgO_4fnuwj/view?usp=sharing" target="_blank" rel= 'noreferrer'>   
<button className='cv'><span>Resume</span></button>
</a>  
            </div>
     

        </div>
        <img className='imageAbout' src='./newyork3.jpeg'  />

        </div>
     );
}
 
export default About;