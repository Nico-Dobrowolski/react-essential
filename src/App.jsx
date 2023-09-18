import Planet from "./components/planet/Planet";
import Navbar from "./components/navbar/Navbar";
import Order from "./components/order/Order";
import { Grid } from "@mui/material";

const App = () => {
  const orders = [
    {
      id: 1,
      titre: "locarna",
      description:
        "Jeu de cartes à collectionner : Le premier chapitre - Booster",
    },
    {
      id: 2,
      titre: "LavAzza",
      description:
        "Café Moulu Il Mattino - Café italien - Arabica et Robusta Intensité 10 - Paquet de 250 g",
    },
  ];

  return (
    <>
      <Navbar />
      <Grid container>
        {orders.map((order) => {
          return (
            <Grid item>
              <Order
                key={order.id}
                titre={order.titre}
                description={order.description}
              />
            </Grid>
          );
        })}
      </Grid>

      <Planet />
    </>
  );
};

export default App;
