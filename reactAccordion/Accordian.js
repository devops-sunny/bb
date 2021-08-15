import React, {useState} from 'react'
import { questions } from "./api";
import MyAccordion from './MyAccordian';
import './accordian.css';

const Accordian = () => {

    const [data, setData] = useState(questions);
    return (
        <>
            <section className="main-div">
                
                <h1>React Interview Questions </h1>
        {
                data.map((curElem) => {
                    return <MyAccordion key={curElem.id} {...curElem} />
                    
                })        
        }
                 </section>
        </>
    )
}

export default Accordian