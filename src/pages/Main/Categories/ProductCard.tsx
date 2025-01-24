import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

interface IProduct {
  product: {
    name: string,
    photoUrl: string,
    isNew?: boolean,
    price: {
    old: number,
    new?: number | undefined,
  }
  }
}

const priceSX = { 
    minWidth: 112,
    height: 35,
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '0 12px 0 12px',
    backgroundColor: "#181717",
    borderRadius: `17px 0 17px 0`,
    textAlign: 'center',
        justifyContent: 'center',
    alignContent: 'center',
    color: '#fff',
    zIndex: 2, 
}

const ProductCard : React.FC<IProduct> = (props) => {
    const {name, photoUrl, isNew = false,  price} = props.product
    return (
        <>
          <Card sx={{
            width: "282px",
            height: '387px',
            padding: '24px',
            marginTop: '25px',
            borderRadius: '24px',
            transition:  'box-shadow 0.3s ease',
            '&:hover': {
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                animation: 'zoomIn 0.4s ease-in-out forwards',
        '@keyframes zoomIn': {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(1.05)',
          },
        },
            },
            
            position: 'relative',
          }}>
            <Stack direction={"column"} justifyItems={"center"} sx={{ zIndex: 1 }}>
              <Typography
                variant="body2"
                sx={priceSX}
              >
                {price.new ? 
                <>
                <span style={{ textDecoration: 'line-through', marginRight: '8px' }}>{price.old} грн.</span>
                <span>{price.new} грн.</span>
                </>
                :
                <span style={{paddingLeft:0}}>{price.old} грн.</span>
                } 
              </Typography>
              { isNew && <Typography
                variant="body2"
                sx={{
                  width: 94,
                  height: 35,
                  position: 'absolute',
                  top: 42,
                  left: 0,
                  backgroundColor: "#181717",
                  borderRadius: `0 17px 17px 0`,
                  textAlign: 'center',
                      justifyContent: 'center',
                  alignContent: 'center',
                  color: '#fff',
                  zIndex: 2, 
                }}
              >
                Новинка
              </Typography>}

             
            
              <Box
                sx={{
                  width: '234px',
                  height: '234px',
                  backgroundImage: `url(${photoUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  border: "none",
                  backgroundColor: '#fff',
                  zIndex: 1,
                }}
              />

              <Typography variant="h6" textAlign={"center"} sx={{ zIndex: 2, marginBottom: '5px' }}>
                {name}
              </Typography>
              
              <Button variant="text" sx={{
                backgroundColor: '#181717',
                width: '234px',
                height: '48px',
                borderRadius: '28px',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#fff',
                  color: '#181717',
                  border: '1px solid #181717'
                },
                zIndex: 2,
              }}>
                Додати до кошика
              </Button>
            </Stack>
          </Card>
        </>
    );
}

export default ProductCard;
