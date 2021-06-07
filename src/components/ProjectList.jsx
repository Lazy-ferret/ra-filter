import React from 'react'

export default function ProjectList(props) {
    const { projects } = props;

    return (
        <div className='Projects'>
            {projects.map((item) => {
                return <img className='Image' src={item.img}/>
            })
            }
        </div>
    )
};



