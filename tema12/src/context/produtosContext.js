import React, { createContext, useState } from "react";

const ProdutosContext = createContext([{}, () => {}]);

const Provider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <ProdutosContext.Provider value={[count, setCount]}>
      {children}
    </ProdutosContext.Provider>
  );
};

export { ProdutosContext, Provider };
