import './info.css';
import React from 'react';


function Contact({ contactInfo }) {

    return (
        <div className='info'>
            <h3>Contact</h3>
            <hr />
            <ul>
                <li>
                    <h4>Phone</h4><span>{contactInfo?.phone}</span>
                </li>
                <li>
                    <h4 style={{wordBreak: 'break-all'}}>Email</h4><span>{contactInfo?.email}</span>
                </li>
                <li>
                    <h4>Address</h4><span>{contactInfo?.address}</span>
                </li>
                <li>
                    <h4>LinkedIn</h4><span>{contactInfo?.linkedIn}</span>
                </li>
                <li>
                    <h4>Portfolio</h4><span>{contactInfo?.portfolio}</span>
                </li>
            </ul>
        </div>
    );
}

function Education({ educationInfo }) {
    return (
        <div className='info'>
            <h3>Education</h3>
            <hr />
            <ul>
                <li>
                    <h4>Degree</h4><span>{educationInfo.degree}</span>
                </li>
                <li>
                    <h4>Institution</h4><span>{educationInfo.institution}</span>
                </li>
                <li>
                    <h4>Graduate</h4><span>{educationInfo.graduate}</span>
                </li>

            </ul>
        </div>
    );

}

function Skills({ skillsInfo }) {
    return (
        <div className='info'>
            <h3>Skills</h3>
            <hr />
            <ul className='normal'>
                {skillsInfo?.map((val) => {
                    if (val !== '') {
                        return (<li>{val}</li>);
                    } else {
                        return null;
                    }
                })}
            </ul>
        </div>

    );
}



export { Contact, Education, Skills };