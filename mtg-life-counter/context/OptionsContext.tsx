import { createContext } from "react";

export const OptionsContext = createContext<Options>({ life: 20, players: 2 });
