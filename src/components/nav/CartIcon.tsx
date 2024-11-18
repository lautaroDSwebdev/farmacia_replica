import { IconButton } from "@mui/material";
import { useState } from "react";
import ShowSelectedProd from "../SectionsHome/viewProducts/ShowSelectedProd";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
export const CartIcon = () => {
  const [view_cart, setEstado] = useState(true);

  const first = () => {
    setEstado(!view_cart);
  };

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -6,
      top: 0,
      border: `2px solid ${theme.palette.background.paper}`,
    },
  }));
  const selectorRedux = useSelector((state) => state.cart.cart);
  return (
    <ul className=" ">
      <IconButton onClick={first} aria-label="cart">
        <StyledBadge badgeContent={selectorRedux.length} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      {!view_cart && <ShowSelectedProd selectorRedux={selectorRedux} />}
    </ul>
  );
};
