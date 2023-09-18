import { useState } from "react";
import { createContext } from "react";

export const UserContextes = createContext({});

export default ({ children }) => {
  const username = "Nico";
  const [like, setLike] = useState(0);

  const onclickLikeBtn = () => {
    setLike(like + 1);
  };

  const onclickDislikeBtn = () => {
    setLike(like - 1);
  };

  return (
    <UserContextes.Provider
      value={{ like, username, onclickLikeBtn, onclickDislikeBtn }}
    >
      {children}
    </UserContextes.Provider>
  );
};
