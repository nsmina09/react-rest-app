import React, { useEffect, useState } from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreviw from './Restreviw';
import Collapse from 'react-bootstrap/Collapse';

function Viewrest() {
    const urlparams = useParams()
    const [restaurantList, setRestaurant] = useState([])
    const [open, setOpen] = useState(false);
    //create a function for api call
    const getRestaurant = async () => {
        //async call
        await fetch('/restaurants.json').then(data => {
            data.json().then(result => {
                setRestaurant(result.restaurants)
            })
            // console.log(data);
        })
    }

    useEffect(() => {
        getRestaurant()
    }, [])
    // console.log(restaurantList);

    const rest = restaurantList.find(item =>
        item.id == urlparams.id
    )
    console.log(rest);
    return (
        <div className='my-5'>
            {
                rest ? (< Row >
                    <Col >
                        <Image src={rest.photograph} fluid style={{ height: '400px', width: '100%' }} />
                    </Col>
                    <Col className='mt-5'>
                        <h1>{rest.name}</h1>
                        <ListGroup className='mt-2'>
                            <ListGroup.Item className='d-flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-building me-2 mt-1" viewBox="0 0 16 16">
                                    <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                                    <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
                                </svg>
                                <h4>{rest.name}</h4></ListGroup.Item>
                            <ListGroup.Item>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-egg me-2 mt-1" viewBox="0 0 16 16">
                                    <path d="M8 15a5 5 0 0 1-5-5c0-1.956.69-4.286 1.742-6.12.524-.913 1.112-1.658 1.704-2.164C7.044 1.206 7.572 1 8 1c.428 0 .956.206 1.554.716.592.506 1.18 1.251 1.704 2.164C12.31 5.714 13 8.044 13 10a5 5 0 0 1-5 5zm0 1a6 6 0 0 0 6-6c0-4.314-3-10-6-10S2 5.686 2 10a6 6 0 0 0 6 6z" />
                                </svg>
                                {rest.cuisine_type} cuisine</ListGroup.Item>
                            <ListGroup.Item className='d-flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-geo-alt me-2 mt-1" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                                <address>{rest.address}</address></ListGroup.Item>
                        </ListGroup>
                        <>
                            <Restop op={rest.operating_hours} />
                        </>
                        <button onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open} className='d-flex mt-2 bg pt-2 bg-success text-white '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star  me-2 mt-1" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <address>reviews</address></button>

                    </Col>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            <Restreviw review={rest.reviews} />
                        </div>
                    </Collapse>
                </Row>) : 'null'
            }
        </div >
    )
}

export default Viewrest