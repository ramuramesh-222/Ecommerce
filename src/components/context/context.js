import React, { createContext, useState } from "react"

export const productSerch = createContext(null)

function ProductSearchProvider({children}) {

  const[serchinpu,setSerchinpu]=useState('')

  return (
      <productSerch.Provider value={{serchinpu,setSerchinpu}}>
        {children}
      </productSerch.Provider>
  )
}
export default ProductSearchProvider






// import React, { createContext, useState } from 'react';

// export const ProductSearchContext = createContext();

// const ProductSearchProvider = ({ children }) => {
//   const [inputData, setInputData] = useState('');

//   return (
//     <ProductSearchContext.Provider value={{ inputData, setInputData }}>
//       {children}
//     </ProductSearchContext.Provider>
//   );
// };

// export default ProductSearchProvider;
