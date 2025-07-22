import React from 'react'

function Course({ course }) {
    const { id, title, description, price, image } = course;
    return (
        <div className='course'>
            <div>
                <div>
                    <img src={image} alt={title} width={250} />
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p>Price: ${price}</p>

                </div>
            </div>
        </div>
    )
}

export default Course