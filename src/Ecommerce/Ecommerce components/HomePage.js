import React, { useEffect, useState } from "react";
import { AccordionDetails, AppBar, Container } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";

import MoreIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import GetAppIcon from "@mui/icons-material/GetApp";
import { closeMenu } from "../EcommerceReducer/MoreoptionReducer";
import { openMenu } from "../EcommerceReducer/MoreoptionReducer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import { grey } from "@mui/material/colors";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Kurta from "./Kurta.jpg";
import maxi from "./maxi.jpg";
import EditIcon from "@mui/icons-material/Edit";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import addToCartReducer from "../EcommerceReducer/AddtoCartItemsReducer";
import { addToCartReducerActions } from "../EcommerceReducer/AddtoCartItemsReducer";
import { useNavigate } from "react-router-dom";
const HomePage = ({ product }) => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white, // ← solid white background
    "&:hover": {
      backgroundColor: theme.palette.common.white[100], // optional: light grey on hover
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
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
    "& svg": {
      color: theme.palette.primary.main,
    },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 36, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  // for "more" options
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color: "rgb(55, 65, 81)",
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
          ...theme.applyStyles("dark", {
            color: "inherit",
          }),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[300],
      }),
    },
  }));
  const dispatch = useDispatch();
  const anchorEl = useSelector((state) => state.moreOption.anchorEl);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    dispatch(openMenu(event.currentTarget));
  };

  const handleClose = () => {
    dispatch(closeMenu());
  };
  //state variable to add the items in cart using redux

  const addToCartItems = useSelector(
    (state) => state.addToCartReducer.addToCartItems
  );

  const handleAddToCart = (product) => {
    dispatch(addToCartReducerActions.updateAddToCartItems(product));
  };
  //API call to fetch the products

  const getProductList = async () => {
    const result = await fetch("/dummy/api");
    try {
      const response = [
        {
          productName: "Libas",
          productDiscription: "Women Fit and flare Red Maxi/Full Length",
          actualPrice: 3000,
          discountPrice: 1000,
          discountPercentage: 60,
          sellingPrice: 2000,
        },

        {
          productName: "aavasa",
          productDiscription: "Women A line Maroon Maxi/Full length Dress",
          actualPrice: 2000,
          discountPrice: 800,
          discountPercentage: 70,
          sellingPrice: 1000,
        },

        {
          productName: "Visudh",
          productDiscription:
            "woman gathered multicolour  Maxi/Full Length Dress",
          actualPrice: 3500,
          discountPrice: 2000,
          discountPercentage: 50,
          sellingPrice: 3000,
        },

        {
          productName: "kalini",
          productDiscription: "Rayon Blend Stitched Flared/A-line Gown",
          actualPrice: 1000,
          discountPrice: 700,
          discountPercentage: 70,
          sellingPrice: 900,
        },

        {
          productName: "Anouk",
          productDiscription:
            "Printed Georgette Stitched Flared/A-line Gown  (Dark Red)",
          actualPrice: 3000,
          discountPrice: 1500,
          discountPercentage: 50,
        },
        {
          productName: "Ishin",
          productDiscription:
            "Applique Cotton Blend Stitched Straight Gown(Red)",
          actualPrice: 5000,
          discountPrice: 2500,
          discountPercentage: 50,
        },
      ];
      setProductList(response);
    } catch (error) {
      console.log(error);
    }
  };
  //useffect to get productList
  useEffect(() => {
    getProductList();
  }, []);
  //state variable to display the productList
  const [productList, setProductList] = useState([]);

  // state variable to add the items in cart
  // const [cartItems, setCardItems] = useState([]);

  // const handleAddToCart = (product) => {
  //   setCardItems((prevCart) => [...prevCart, product]);
  // };
  const navigate = useNavigate();

  return (
    <>
      <div className="Outercontainer">
        <div className="header">
          {/* Line of code for "menu" icon */}
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                {/* line of code for "Flipkart Typography" */}
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  Flipkart
                </Typography>
                {/* //Line of code for "Search" type */}
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search "
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                {/* Line of code for "Login" button */}
                <Button
                  sx={{
                    backgroundColor: (theme) => theme.palette.common.white,
                    color: "blue",
                    width: "140px",
                    borderRadius: 0,
                    marginLeft: 3,
                  }}
                >
                  Login
                </Button>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, ml: 15, fontSize: "16px" }}
                >
                  Become a Seller
                </Typography>
                {/* //Line of code for "More" option */}
                <Button
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="contained"
                  disableElevation
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  More
                </Button>
                <Box sx={{ ml: 10 }}>
                  <StyledMenu
                    id="demo-customized-menu"
                    slotProps={{
                      list: {
                        "aria-labelledby": "demo-customized-button",
                      },
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose} disableRipple>
                      <NotificationsIcon />
                      Notification Preferences
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem onClick={handleClose} disableRipple>
                      <HelpCenterIcon />
                      24 *7 Customer care
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem onClick={handleClose} disableRipple>
                      <ShowChartIcon />
                      Advertise
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem onClick={handleClose} disableRipple>
                      <GetAppIcon />
                      Download App
                    </MenuItem>
                  </StyledMenu>
                </Box>
                <Badge
                  badgeContent={addToCartItems.length}
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "white",
                      backgroundColor: "red", // Background color
                      fontSize: "0.75rem",
                      minWidth: "20px",
                      height: "20px",
                      padding: "0 6px",
                    },
                  }}
                  onClick={() => navigate("/cart")}
                >
                  <ShoppingCartIcon />
                </Badge>
                <Typography>Cart</Typography>

                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, ml: 1, fontSize: "16px", fontWeight: 500 }}
                >
                  {/* Cart({cartItems.length}) */}
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
        <div>
          <div
            className="Containerbody "
            style={{
              padding: "10px",
              display: "flex",
              // height: "100vh",
              backgroundColor: "#d7d7d7",
            }}
          >
            <Container
              sx={{
                height: "100vh",
                width: "280px",
                backgroundColor: "#fff;",
                padding: 4,
                fontSize: "15px",
                marginTop: 4,
                marginLeft: 0,
              }}
            >
              <Box sx={{ paddingbottom: "12px", marginBottom: 3 }}>
                <Typography
                  sx={{
                    fontsize: "25",
                    texttransform: "capitalize",

                    fontWeight: "bold",
                  }}
                >
                  Filters
                </Typography>
              </Box>
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">Categories</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel control={<Checkbox />} label="Kurtas" />
                    <FormControlLabel control={<Checkbox />} label="Palazoo" />
                    <FormControlLabel control={<Checkbox />} label="Sarees" />
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography component="span">Gender</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel control={<Checkbox />} label="Women" />
                    <FormControlLabel control={<Checkbox />} label="Men" />
                  </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography component="span">Price</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ width: 200 }}>
                      <Slider
                        aria-label="Temperature"
                        defaultValue={100}
                        valueLabelDisplay="auto"
                        shiftStep={30}
                        step={100}
                        marks
                        min={100}
                        max={10000}
                      />
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">Brand</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel control={<Checkbox />} label="Libas" />
                    <FormControlLabel control={<Checkbox />} label="Varanga" />
                    <FormControlLabel control={<Checkbox />} label="aavasa" />
                    <FormControlLabel control={<Checkbox />} label="Ishin" />
                    <FormControlLabel control={<Checkbox />} label="Biba" />
                    <FormControlLabel control={<Checkbox />} label="Vishudh" />
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography component="span">Occassion</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel control={<Checkbox />} label="Ethnic" />
                    <FormControlLabel control={<Checkbox />} label="Sports" />
                    <FormControlLabel control={<Checkbox />} label="Casual" />
                    <FormControlLabel control={<Checkbox />} label="Formal" />
                    <FormControlLabel control={<Checkbox />} label="Wedding" />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Partywear"
                    />
                  </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography component="span">Availability</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Include out of Stock"
                    />
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">Discount</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="30% or more"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="40% or more"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="50% or more"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="60% or more"
                    />
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography component="span">Type</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Crop Top and Palazzo Set"
                    />
                    <FormControlLabel control={<Checkbox />} label="Anarkali" />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Salwar Suit Material"
                    />
                  </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography component="span">Customer Ratings</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="4★ & above"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="3★ & above"
                    />
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">Fit</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Skinny Fit"
                    />
                    <FormControlLabel control={<Checkbox />} label="Slim Fit" />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Regular Fit"
                    />
                  </AccordionDetails>
                </Accordion>
              </div>
            </Container>
            <Container
              sx={{
                backgroundColor: "#fff;",
                padding: 4,
                fontSize: "15px",
                marginTop: 4,
                marginLeft: 2,
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              {productList.map((product) => {
                return (
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      image={maxi}
                      alt="Paella dish"
                      sx={{
                        height: 380,
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ color: "grey" }}>
                        {product.productName}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "black" }}>
                        {product.productDiscription}
                      </Typography>
                      <Box sx={{ display: "flex", marginTop: 2 }}>
                        <CurrencyRupeeIcon fontSize="small"></CurrencyRupeeIcon>
                        <Typography>{product.discountPrice}</Typography>
                        <CurrencyRupeeIcon fontSize="small"></CurrencyRupeeIcon>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Typography
                            sx={{
                              textDecoration: "line-through",
                              color: "gray",
                            }}
                          >
                            ₹{product.actualPrice}
                          </Typography>
                          <Typography
                            sx={{ color: "green", fontWeight: "bold" }}
                          >
                            {product.discountPercentage}% off
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>

                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#ff9f00",
                          marginLeft: 4,
                        }}
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </CardActions>
                  </Card>
                );
              })}
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
