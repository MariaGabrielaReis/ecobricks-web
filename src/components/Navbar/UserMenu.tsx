"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import AccountCircle from "@mui/icons-material/AccountCircle";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";

export type UserMenuProps = { user: any | null };

export function UserMenu(props: UserMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();

  function handleMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function redirectToCart() {
    handleClose();
    router.push("/my-cart");
  }

  function redirectToMyOrders() {
    handleClose();
    router.push("/my-orders");
  }

  function handleClose() {
    setAnchorEl(null);
  }

  async function handleLogout() {
    handleClose();
  }

  return props.user ? (
    <div>
      <IconButton size="large" onClick={handleMenu}>
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={redirectToCart}>
          <ShoppingCartIcon />
          <Typography>Meu carrinho</Typography>
        </MenuItem>
        <MenuItem onClick={redirectToMyOrders}>
          <ListAltIcon />
          <Typography>Meus pedidos</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <LogoutIcon />
          <Typography>Sair</Typography>
        </MenuItem>
      </Menu>
    </div>
  ) : (
    <Link href={"/login"} style={{ textDecoration: "none" }}>
      <Typography color="text.primary" sx={{ ml: 3, fontWeight: 500 }}>
        Entrar
      </Typography>
    </Link>
  );
}
