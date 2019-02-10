import React from "react";
import styled from "styled-components";
import ItemListHeader from "./ItemListHeader";

// import {
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   Button
// } from "reactstrap";

import classnames from "classnames";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button"

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  itemTitle: {
    "font-size": "15px",
    "font-weight": "bold"
  }
});

const ItemList = props => {
  const routeToItemPage = (e, item) => {
    e.preventDefault();
    props.history.push(`/item-list/${item.itemId}`);
    props.getItemById(item.itemId);
  };

  const getItemOwnerUserName = itemOwnerNum => {
    const itemOwner =
      props.users &&
      props.users.find(user => {
        return user.userId === itemOwnerNum;
      });

    const userName = !itemOwner ? "Loading" : itemOwner.username;

    return userName;
  };

  const getItemOwnerThumbnail = itemOwnerNum => {
    const itemOwner =
      props.users &&
      props.users.find(user => {
        return user.userId === itemOwnerNum;
      });

    const userName = !itemOwner ? "Loading" : itemOwner.thumbnail;

    return userName;
  };

  const { classes } = props;

  return (
    <>
      {props.items.map(item => {
        return (
          <ItemCardContainer>
            <Card>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="Recipe"
                    className={classes.avatar}
                    src={getItemOwnerThumbnail(item.owner)}
                  />
                }
                title={getItemOwnerUserName(item.owner)}
              />
              <CardMedia
                className={classes.media}
                image={item.imgUrl}
                title={item.title}
              />
              <CardContent>
                <Typography variant="h2" className={classes.itemTitle}>
                  {item.title}
                </Typography>
                <Typography>
                  {item.brand} - {item.model}
                </Typography>
                <Typography>{`$${item.dailyPrice} / day`}</Typography>
                <Typography>{`$${item.weeklyPrice} / week`}</Typography>
                <Button color="primary" variant="raised" size="small" onClick={e => routeToItemPage(e, item)} >View Item</Button>
              </CardContent>
            </Card>
          </ItemCardContainer>
        );
      })}
    </>
  );
};

/* 
==== Component Styles ====
*/

const ItemCardContainer = styled.div`
  width: 45%;
  margin-top: 5%;
  margin-bottom: 1%;
  text-align: left;
`;

const ItemButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default withStyles(styles)(ItemList);

/* <ItemCardContainer key={item.itemId}>
              <Card>
                <CardBody>
                  {
                    <CardTitle>
                      {`Owner: ${getItemOwnerUserName(item.owner)}`}
                    </CardTitle>
                  }
                </CardBody>
                <CardImg
                  top
                  width="40%"
                  src={item.imgUrl}
                  alt={item.title}
                />
                <CardBody>
                  <CardTitle>{item.title}</CardTitle>
                  <CardSubtitle>
                    {item.brand} - {item.model}
                  </CardSubtitle>
                  <CardSubtitle>{`$${
                    item.dailyPrice
                  } / day`}</CardSubtitle>
                  <CardSubtitle>{`$${
                    item.weeklyPrice
                  } / week`}</CardSubtitle>
                  <CardText>{item.description}</CardText>

                  <Button onClick={e => routeToItemPage(e, item)}>
                    View Item
                  </Button>
                </CardBody>
              </Card>
            </ItemCardContainer> */
