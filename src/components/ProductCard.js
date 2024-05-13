import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Name from './Name';
import Description from './Description';
import Price from './Price';
function ProductCard({product}) {
    const alertHello=(name)=>alert(name)
  return (
    <Card style={{width: '22rem',margin: "auto",alignItems:"center",marginTop:"35px",backgroundColor:"#00fffd"}}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title style={{fontSize:"25px",textAlign:"center",fontWeight:"800"}}>{product.name}</Card.Title>
        <Card.Text  style={{fontSize:"20px",textAlign:"center",fontWeight:"600"}}>
        {product.description}{product.price}
         <Price/>
        </Card.Text>
        <Button style={{backgroundColor:"green",textAlign:"center"}} variant="primary" onClick={()=>alertHello("Mustafa")}>Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
