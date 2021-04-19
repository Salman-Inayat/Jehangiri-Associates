import React, {useState} from 'react'
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Card, makeStyles } from '@material-ui/core';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


AOS.init({})


function Arrow(props) {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;

    return <div onClick={clickFunction}>{icon}</div>;
}

function Testimonial(){

    const SLIDE_INFO = [
        {  
            image:'pic1.png',
            title: ' I recently sold a house through Jahangiri Associates, and while this can be a very stressful process, I felt 110% confident by partnering with Jahangiri Associates. They were candid, provided great feedback, helped in explaining all details, and managed the actual sale negotiation brilliantly. In addition, they were extremely responsive to each one of my questions, no matter how small. As I move forward to now BUY my next house, I am extremely certain Jahangiri Associates will be the right partner to help me navigate this process.',
            name:'Tayyab Abbas' 
        },
        {  
            image:'pic2.png',
            title: ' I would highly recommend Jahangiri Associates, They gave us many helpful suggestions on how to update our home. We followed many of their ideas and our home looked amazing. Jahangiri Associates is very professional and they did a very in depth market analysis to help us determine a selling price. Jahangiri Associates marketed our house well and showed it often, and we were able to get an offer on our home in just 10 days. They were very responsive to any questions or concerns that we had and were always wonderful to deal with. ',
            name:'Malik Aaqib' 
        },
        {  
            image:'pic3.png',
            title: " My wife and I had a dream of downsizing from our house in F-6 sector into a small flat closer to where we work in DHA Phase-2. Jahangiri Associates and their skilled team helped us made that dream a reality. The sale went smoothly, and we just closed on an ideal new place we're excited to call our Dream Place to live. Nobody knows about DHA and Bahria better than Jahangiri Associates. They really listen to clients and goes the extra mile with customer service, too.",
            name:'Usman Akbar' 
        } 
    ];

    const [index, setIndex] = useState(0);
    const content = SLIDE_INFO[index];
    const numSlides = SLIDE_INFO.length;

    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;
        setIndex(newIndex);
    };



    return(
        <div className="testimonial">
            <h3>Testimonials</h3>
            <div className="carousel" data-aos="fade-up">
            <Arrow
                direction='left'
                clickFunction={() => onArrowClick('left')}
            />
            <CarouselSlide  content={content} />
            <Arrow
                direction='right'
                clickFunction={() => onArrowClick('right')}
            />
            </div>
        </div>
    )
}


function CarouselSlide(props) {
    const {  image, title, name } = props.content;

    return (
        <Card className= "card-carousel" style={{backgroundColor:'transparent'}}>
            <img className='test_img' src={image} alt='img'></img>
            <blockquote>
                <p className="para" style={{fontWeight:'400'}}><em>{title}</em></p>
            </blockquote>
            <h4 style={{color:'white', fontWeight:'500'}}>{name}</h4>
        </Card>
    );
}

export default Testimonial;