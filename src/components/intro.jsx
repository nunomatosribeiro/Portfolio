const Intro = () => {
    return ( 
        <section className="introSection" >
        <div className="titleDiv">

        <h1>Welcome aboard!</h1>
        <p>Hi! My name is Nuno Ribeiro and I am a junior front-end developer.  </p>
        <a href="https://drive.google.com/file/d/1jw3HVB-zZQGD9R7BSEhQwwruF4oAdv6Q/view?usp=sharing" target="_blank" rel= 'noreferrer'>   
<button className='cv'><span>Resume</span></button>
</a>  
        </div>
    <div className="imgDiv">
        <img className='imgIntro' src='./newyork3.jpeg'  />
        </div>
        
        </section>
     );
}
 
export default Intro;