import React from 'react'

const Section1 =()=> {
    return(
       <div className='Section1'>
            <section className="section section1" id="section">
            <div className="block block1">
                <h2 className="sub-header">Welcome to our Landing Page!</h2>
                <p className="text block1-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex obcaecati hic adipisci voluptatem non quod, facilis, blanditiis explicabo libero inventore praesentium aspernatur nisi! Cumque totam asperiores neque, ab qui sapiente dolore doloremque accusantium cum harum autem labore delectus, mollitia vel.</p>
                <p className="text block1-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, mollitia. Distinctio pariatur error nostrum quo expedita perferendis</p>
                <button className="button" id="button1">Learn More</button>
                <button className="button" id="button2">Download Now</button>
            </div>
            <div className="block block2">
                <img src="media/laptop.png" alt="landing image" className="landing-img img-fluid" />
            </div>
        </section>
        </div> 
    )
}

export default Section1