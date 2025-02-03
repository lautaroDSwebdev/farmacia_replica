import { IconButton } from "@mui/material";
import { useState } from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import ShowSelectedProd from "../pages/homepage/SectionsHome/viewProductsCart/ShowSelectedProd";
import { Rootstate } from "../../store";
const CartIcon = () => {
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

  const selectorRedux = useSelector((state: Rootstate) => state.cart.cart);
  return (
    <ul className=" ">
      <IconButton onClick={first} aria-label="cart">
        <StyledBadge badgeContent={selectorRedux.length} color="secondary">

          <ShoppingCartIcon />

        </StyledBadge>
      </IconButton>
      {!view_cart &&
        <ShowSelectedProd
          view_cart={view_cart}
          setEstado={setEstado}
          selectorRedux={selectorRedux} />
      }
    </ul>
  );
};

export default CartIcon;