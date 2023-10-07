import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { deleteProducts, getProducts } from '../utils/products';
import { Box, Button, Img, SimpleGrid } from '@chakra-ui/react';
import { Edit } from './Edit';
import { AuthContext } from '../context/AuthContext';


export const Products = () => {

    const [products, setProducts] = useState([])


    const { state } = useContext(AuthContext);

const [data, setData] = useState([]);

useEffect(() => {
  getProducts().then((r) => setData(r.data));
}, [data]);

const getData = () => {
  axios.get("http://localhost:3001/products").then((r) => setData(r.data));
};


 const handleDelete = (id) => {

     console.log("id", id)

    deleteProducts(id).then((r) => getData());
  };



  

  return (
    <SimpleGrid columns={4} spacing={10}>
        {data?.map((item) => (
          <Box key={item._id} style={{border: "1px solid black", width : "200px", margin : "auto"}}>
               <h1>{item.title}</h1>
               <Img src={item.image} alt="" style={{ width : "200px"}}/>
               <p>{item.price}</p>
              {state.isAuth ?
              <>
            <Button onClick={() => handleDelete(item._id)} colorScheme='teal' size='md'>Remove</Button>
            <Edit {...item} setData={setData} />
            </>
            : ""}
            
          </Box>
        ))}
    </SimpleGrid>
  )
}
