import { Button, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";

const Planet = () => {
  const [id, setId] = useState(1);
  const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/planets/" + id)
      .then((response) => response.json())
      .then((data) => {
        setPlanet(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const onClickNextPlanet = () => {
    setId(id + 1);
  };

  return (
    <>
      <Card sx={{ width: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {planet.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            climate : {planet.climate} <br />
            terrain : {planet.terrain}
          </Typography>
        </CardContent>
      </Card>
      <LoadingButton
        onClick={onClickNextPlanet}
        loading={loading}
        loadingIndicator="Loading…"
        variant="outlined"
      >
        Next planet
      </LoadingButton>
    </>
  );
};

export default Planet;
