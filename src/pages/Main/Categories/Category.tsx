import { Box, Stack, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

interface ICategory {
  title: string,
  width: string,
}

const Category : React.FC<PropsWithChildren<ICategory>> = (props) => {
    const {children, title, width, ...rest} = props
    return (
        <>
          <Typography variant="h1" textAlign={"center"}>
              {title}
          </Typography>
          <Stack direction={"row"} flexWrap={"wrap"} gap = {"12px"} sx={{
            width: `${width}`,
            height: "auto",
            justifyItems: 'center',
          }}>
              {children}
          </Stack>
        </>
      );
}

export default Category;