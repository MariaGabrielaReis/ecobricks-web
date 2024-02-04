"use client";

import { useSearchParams } from "next/navigation";

import SearchIcon from "@mui/icons-material/Search";
import { InputBase, styled } from "@mui/material";
import { grey } from "@mui/material/colors";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: grey[200],
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "50%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: grey[800],
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: grey[900],
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

export function SearchBar() {
  const searchParams = useSearchParams();

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <form>
        <StyledInputBase
          name="search"
          type="search"
          placeholder="Pesquisar…"
          defaultValue={searchParams.get("search")}
        />
      </form>
    </Search>
  );
}
