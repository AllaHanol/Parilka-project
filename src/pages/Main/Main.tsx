import { Box } from "@mui/material";
import React from "react";
import Header from "./Header/Header";
import Carousel from "./Carousel/Carousel";
import Category from "./Categories/Category";
import ProductCard from "./Categories/ProductCard";
import Feedback from "./Feedback/Feedback";
import Footer from "./Footer/Footer";

const MockImage = "https://s3-alpha-sig.figma.com/img/0d30/7c3f/75b56faff4303bc0f05d4a6f8887e5c8?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q014Z3kATO7wnYTnPk4OEmwqm9h~uPfC24iCxED2Yvz3QgPDk2GgIEJ3dM6363bhO6PYWQ4hNOXHc6OR15iZYRdklZblY~ly4umenVxcYaQJz4KThIVJHhFM7dLFOiJls6Z6BRCercmaBAIP9RuiqZTpXGOWF1b7nt2J657dErDayfOR1BhK3Rel4yXAh~vuYxl-JmAQy7PTuOWY~zry8NeSbfGfYYP15ASoaEf5JmX1Zyj2-WzcD0iLu3Yqf8NKgZ7HIbrrFO-yCGtO~Ai0HqBxyN93-pC8zt4B8DuCYyVIKg6Nniad5el2wVKWxKvDrlN0U4Uetl6WiGf3FeGyPg__"
const MockImage2 = "https://s3-alpha-sig.figma.com/img/8353/2a86/1562dc07de512fb23246fb16cf3133b9?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hYQva~B8Pmx1WAgx799u7FOGztFWGc~ObORzeF6Gi4~dg8afkUDGo1ENrP2pixPvPUnG6AFvjGPEQMyXFBwfporU67EJAbqe0ApHldFm6db4nzWQi95F~k93eCJbTM4INPtWZDcN98jvXhyXuXteEs08reIsKZgU49p06J29VAUMnVvVADt7xbh9SXwpeu0Z9bhBQYLLmgevZ-gcJnwBTl87ZpFyJ4Y5rXGnt7GlQva~9CEBis5TYWKaK5iGq96lxe77kTVqr6N8Tz6SNRWqxPifJKPE1Smmx789w3bciAFChoIZSQBbc019iVQUEFSbfbamM4GXRfdtEzsbODYlDA__"
const ProductCards = [
  {
    name: "Uwell Caliburn G3 Uwell Caliburn G3",
    photoUrl: MockImage,
    isNew: false,
    price: {
    old: 1000,
  }
  },
  {
    name: "Uwell Caliburn G3 Uwell Caliburn G3",
    photoUrl: MockImage,
    isNew: false,
    price: {
    old: 1000,
    new: 800,
  }
  },
  {
    name: "Uwell Caliburn G3 Uwell Caliburn G3",
    photoUrl: MockImage,
    isNew: true,
    price: {
    old: 1000,
  }
  },
  {
    name: "Uwell Caliburn G3 Uwell Caliburn G3",
    photoUrl: MockImage,
    isNew: true,
    price: {
    old: 1000,
  }
  },
  {
    name: "Uwell Caliburn G3 Uwell Caliburn G3",
    photoUrl: MockImage2,
    isNew: true,
    price: {
    old: 1000,
    new: 800,
  }
  },
  {
    name: "Uwell Caliburn G3 Uwell Caliburn G3",
    photoUrl: MockImage2,
    isNew: true,
    price: {
    old: 1000,
  }
  },
  {
    name: "Uwell Caliburn G3 Uwell Caliburn G3",
    photoUrl: MockImage2,
    isNew: false,
    price: {
    old: 1000,
  }
  },
  {
    name: "Uwell Caliburn G3 Uwell Caliburn G3",
    photoUrl: MockImage2,
    isNew: true,
    price: {
    old: 1000,
  }
  },

]



const Main: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        

        
        <Header/>
        <Box sx={{ marginTop: "136px" }}>
        <Carousel />
        </Box>
        <Box sx={{ marginTop: "62px",  justifyItems: 'center',}}> 
          <Category  width = {"1200px"} title = {"Хіти продажів"}>
            {ProductCards.map((card, index) => (
              <ProductCard product={card}></ProductCard>
            ))}
            </Category>
        </Box>
        <Box sx={{ marginTop: "48px",  justifyItems: 'center',}}> 
          <Category width = {"100vw"} title = {"Відгуки"}>
              <Feedback></Feedback>
          </Category>
        </Box>

        <Footer></Footer>
        </Box>

  );
};

export default Main;
