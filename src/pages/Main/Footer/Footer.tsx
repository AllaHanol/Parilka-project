import React from "react";
import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  Stack,
  Divider,
} from "@mui/material";
import EmailIcon from "../../../components/icons/EmailIcon";
import PhoneIcon from "../../../components/icons/PhoneIcon";
import GeoSignIcon from "../../../components/icons/GeoSignIcon";
import FacebookIcon from "../../../components/icons/FacebookIcon";
import InstagramIcon from "../../../components/icons/InstagramIcon";

const FooterLabel = (props: React.PropsWithChildren) => {
  const { children } = props;
  return (
    <Typography variant="body2" sx={{ textAlign: "start", marginBottom: '20px' }}>
      {children}
    </Typography>
  );
};
const FooterList = (props: React.PropsWithChildren) => {
  const { children } = props;
  return <List sx={{ textAlign: "start", marginBottom: '40px'}} >{children}</List>;
};

interface IFooterListItem {
  text?: string;
  onClick?: () => void;
}

const FooterListItem = (props: React.PropsWithChildren<IFooterListItem>) => {
  const { children, onClick } = props;
  return (
    <ListItem
      disablePadding
      sx={{ marginBottom: '6px',
    '&:hover': {
      cursor: 'pointer'
    },
    }}
      onClick={onClick}
      
    >
      {children}
    </ListItem>
  );
};

const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          height: "auto",
          color: "white",
          py: 0,
          mt: "auto",
          textAlign: "center",
          backgroundColor: "#181717",
          padding: "72px 144px 0 144px",
        }}
      >
        <Container>
          <Stack
            direction={"row"}
            gap={"40px"}
            justifyContent={"space-between"}
          >
            <Stack>
              <FooterLabel>Мій акаунт</FooterLabel>
              <FooterList>
                <FooterListItem onClick = {() => console.log('hi')}>
                  Вхід
                </FooterListItem>
                <FooterListItem>
                  <ListItemText primary="Реєстрація" />
                </FooterListItem>
                <FooterListItem>
                  <ListItemText primary="Кошик" />
                </FooterListItem>
                <FooterListItem>
                  <ListItemText primary="Історія замовлень" />
                </FooterListItem>
                <FooterListItem>
                  <ListItemText primary="Редагувати профіль" />
                </FooterListItem>
              </FooterList>
            </Stack>
            <Stack>
              <FooterLabel>Каталог</FooterLabel>
              <FooterList>
                <FooterListItem>
                  <ListItemText primary="Рідини" />
                </FooterListItem>
                <FooterListItem>
                  <ListItemText primary="Девайси" />
                </FooterListItem>
                <FooterListItem>
                  <ListItemText primary="Комплектуючі" />
                </FooterListItem>
                <FooterListItem>
                  <ListItemText primary="Все для кальяну" />
                </FooterListItem>
                <FooterListItem>
                  <ListItemText primary="Пошук" />
                </FooterListItem>
              </FooterList>
            </Stack>
            <Stack>
              <FooterLabel>Про магазин</FooterLabel>
              <FooterList>
                <FooterListItem>
                  <ListItemText primary="Головна" />
                </FooterListItem>
                <FooterListItem>
                  <ListItemText primary="Про нас" />
                </FooterListItem>
                <FooterListItem>
                  <ListItemText primary="Доставка і оплата" />
                </FooterListItem>
                <FooterListItem>
                  <ListItemText primary="Відгуки" />
                </FooterListItem>
              </FooterList>
            </Stack>
            <Stack>
              <FooterLabel>Контакти</FooterLabel>
              <FooterList>
                <FooterListItem>
                    <Stack direction={"row"} gap = {"12px"}>
                        <Stack sx = {{alignContent: 'center', justifyContent: 'center'}}>
                        <EmailIcon/>
                        </Stack>
                        <Stack sx = {{p:0, m:0}}>
                            <ListItemText disableTypography primary="Email:" sx = {{fontSize: '14px',  p:0, m:0}} />
                            <ListItemText disableTypography primary="parilka@vapeshop" sx = {{fontSize: '16px', p:0, m:0}}/>
                        </Stack>
                  </Stack>
                </FooterListItem>
                <FooterListItem>
                    <Stack direction={"row"} gap = {"12px"}>
                        <Stack sx = {{alignContent: 'center', justifyContent: 'center'}}>
                        <PhoneIcon/>
                        </Stack>
                        <Stack sx = {{p:0, m:0}}>
                            <ListItemText disableTypography primary="Телефон:" sx = {{fontSize: '14px',  p:0, m:0}} />
                            <ListItemText disableTypography primary="+38 097 687  892" sx = {{fontSize: '16px', p:0, m:0}}/>
                        </Stack>
                  </Stack>
                </FooterListItem>
                <FooterLabel>Магазин</FooterLabel>
                <FooterListItem>
                    <Stack>
                    <Stack direction={"row"} marginBottom = {"20px"}>
                        <Stack sx = {{alignContent: 'center', justifyContent: 'center'}}>
                        <GeoSignIcon/>
                        </Stack>
                        <Stack sx = {{p:0, m:0, }} >
                            <ListItemText disableTypography primary="Хрещатик 12" sx = {{fontSize: '16px', pl: '16px', m:0, alignContent: 'center', justifyContent: 'center', textAlign: 'center'}}/>
                        </Stack>
                  </Stack>
                        <Stack direction = {"row"} sx = {{alignContent: 'center', justifyContent: 'flex-start'}} gap = {"16px"}>
                        <FacebookIcon/>
                        <InstagramIcon/>
                       
                  </Stack>
                  </Stack>
                </FooterListItem>
              </FooterList>
            </Stack>
          </Stack>
        </Container>
        <Divider color={"#fff"} />
        <Typography variant="h6" color="inherit" sx= {{padding: '24px 0'}}>
          Зроблено в ParilkaVapeShop © 2024
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
