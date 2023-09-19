import { useState } from "react";
import { FilterContext } from "./SearchContexts";

export default function FilterProvider({ children })
{

    const [filter, setFilter] = useState('');

    return (
        <FilterContext.Provider value={{filter, setFilter}} >
            {children}
        </FilterContext.Provider>
    )
}; 