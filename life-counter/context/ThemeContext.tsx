import React, { createContext, useContext, useState } from "react";
import { Player } from "@/types/player";

export const themes = {
    forest: { styles: { color: "#000e03", backgroundColor: "#9cd4b0" }, source: require("@/assets/images/s_mtg_forest.png") },
    island: { styles: { color: "#01121c", backgroundColor: "#abe1fa" }, source: require("@/assets/images/s_mtg_island.png") },
    mountain: { styles: { color: "#1a0000", backgroundColor: "#f9ac90" }, source: require("@/assets/images/s_mtg_mountain.png") },
    plains: { styles: { color: "#1b170d", backgroundColor: "#fffbd6" }, source: require("@/assets/images/s_mtg_plains.png") },
    swamp: { styles: { color: "#0b0406", backgroundColor: "#ccc3c0" }, source: require("@/assets/images/s_mtg_swamp.png") },
    tradeFederation: { styles: { color: "#000", backgroundColor: "#35468f" }, source: require("@/assets/images/trade_federation.png") },
    blobs: { styles: { color: "#000", backgroundColor: "#8dc654" }, source: require("@/assets/images/blobs.png") },
    starEmpire: { styles: { color: "#000", backgroundColor: "#fbec1d" }, source: require("@/assets/images/star_empire.png") },
    machineCult: { styles: { color: "#000", backgroundColor: "#d72d32" }, source: require("@/assets/images/machine_cult.png") },
};

type ThemeContextType = {
    playerThemes: Record<Player, { styles: object; source: any }>;
    setPlayerTheme: (player: Player, themeKey: keyof typeof themes) => void;
};

// Create context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    // Store full theme data per player
    const [playerThemes, setPlayerThemes] = useState<Record<Player, { styles: object; source: any }>>({
        playerA: themes.plains,
        playerB: themes.swamp,
    });

    // Function to update a player's theme
    const setPlayerTheme = (player: Player, themeKey: keyof typeof themes) => {
        setPlayerThemes((prev) => ({
            ...prev,
            [player]: themes[themeKey],
        }));
    };

    return (
        <ThemeContext.Provider value={{ playerThemes, setPlayerTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook to use Theme Context
export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeProvider");
    }
    return context;
};
