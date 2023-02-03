import React, { useEffect, useState } from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';


function Resturentlist() {
    const [restaurantList, setRestaurant] = useState([])
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
     console.log(restaurantList);
    useEffect(() => {
        getRestaurant()
    }, [])

    return (
        <Row>
            {
                restaurantList.map(item => {
                    return <Restcard restaurant={item} />
                       // <h1>{item.name}</h1>
                })
            }
        </Row>
    )
}

export default Resturentlist