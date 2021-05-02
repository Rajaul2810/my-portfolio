import React from 'react';
import Progress from './Progress';

const testData = [
    { bgcolor: "#6a1b9a", completed: 80, skill: "Javascript" },
    { bgcolor: "#00695c", completed: 70, skill: "ReactJS" },
    { bgcolor: "#ef6c00", completed: 90, skill: "Bootstrap" },
    { bgcolor: "#6a1b9a", completed: 60, skill: "NodeJS" },
    { bgcolor: "crimson", completed: 75, skill: "MongoDB" },
    { bgcolor: "#ef6c00", completed: 50, skill: "React Native" },
    { bgcolor: "crimson", completed: 60, skill: "ReduxJS" },
    { bgcolor: "#ef6c00", completed: 50, skill: "C++" },
];

const Skills = () => {
    return (
        <section className="mt-5 pt-5 mb-5">
            <h2 className="text-center ">Programming <span style={{color:'crimson'}}>Skills.</span></h2>
            <p  className="text-center mb-5"style={{color:'crimson'}}>What i know</p> 
            <div className="d-flex justify-content-center">
                <div className="text-center w-75 pt-3 pe-3 ps-3 pb-3" style={{boxShadow:'2px 5px 10px 5px crimson'}} >
                    {testData.map((item, idx) => (
                        <Progress key={idx} bgcolor={item.bgcolor} skill={item.skill} completed={item.completed} />
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Skills;