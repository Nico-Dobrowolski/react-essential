/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { UserContextes } from "../../contextes/UserData";

const Order = ({ titre, description }) => {
  const { onclickLikeBtn, onclickDislikeBtn } = useContext(UserContextes);
  return (
    <Card sx={{ width: 275, height: 300 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {titre}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onclickLikeBtn}>
          Like
        </Button>
        <Button size="small" onClick={onclickDislikeBtn} color="error">
          Dislike
        </Button>
      </CardActions>
    </Card>
  );
};

export default Order;
