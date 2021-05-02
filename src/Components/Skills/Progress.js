import React from 'react';

const Progress = (props) => {
    const { bgcolor, completed, skill } = props;
    const containerStyles = {
        height: 20,
        width: '90%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 10
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div>
            <h5>{skill}</h5>
            <div style={containerStyles}>

                <div style={fillerStyles}>
                    <span style={labelStyles}> {`${completed}%`}</span>
                </div>
            </div>
        </div>

    );
};

export default Progress;
