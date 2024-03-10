import { create } from "zustand";

type PlayerState = {
	player1: { life: number; color: string; name: string };
	player2: { life: number; color: string; name: string };
	player3: { life: number; color: string; name: string };
	player4: { life: number; color: string; name: string };

	setPlayer1Life: (life: number) => void;
	setPlayer2Life: (life: number) => void;
	setPlayer3Life: (life: number) => void;
	setPlayer4Life: (life: number) => void;

	setPlayer1Color: (color: string) => void;
	setPlayer2Color: (color: string) => void;
	setPlayer3Color: (color: string) => void;
	setPlayer4Color: (color: string) => void;

	setPlayer1Name: (name: string) => void;
	setPlayer2Name: (name: string) => void;
	setPlayer3Name: (name: string) => void;
	setPlayer4Name: (name: string) => void;

	resetAllLife: (life: number) => void;
};

export const usePlayerStore = create<PlayerState>((set) => ({
	player1: { life: 40, color: "#99aa38", name: "Player 1" },
	player2: { life: 39, color: "#14591d", name: "Player 2" },
	player3: { life: 38, color: "#acd2ed", name: "Player 3" },
	player4: { life: 37, color: "#0a210f", name: "Player 4" },

	setPlayer1Life: (life) =>
		set((state) => ({ player1: { ...state.player1, life } })),
	setPlayer2Life: (life) =>
		set((state) => ({ player2: { ...state.player2, life } })),
	setPlayer3Life: (life) =>
		set((state) => ({ player3: { ...state.player3, life } })),
	setPlayer4Life: (life) =>
		set((state) => ({ player4: { ...state.player4, life } })),

	setPlayer1Color: (color) =>
		set((state) => ({ player1: { ...state.player1, color } })),
	setPlayer2Color: (color) =>
		set((state) => ({ player2: { ...state.player2, color } })),
	setPlayer3Color: (color) =>
		set((state) => ({ player3: { ...state.player3, color } })),
	setPlayer4Color: (color) =>
		set((state) => ({ player4: { ...state.player4, color } })),

	setPlayer1Name: (name) =>
		set((state) => ({ player1: { ...state.player1, name } })),
	setPlayer2Name: (name) =>
		set((state) => ({ player2: { ...state.player2, name } })),
	setPlayer3Name: (name) =>
		set((state) => ({ player3: { ...state.player3, name } })),
	setPlayer4Name: (name) =>
		set((state) => ({ player4: { ...state.player4, name } })),

	resetAllLife: (life) =>
		set((state) => ({
			player1: { ...state.player1, life },
			player2: { ...state.player2, life },
			player3: { ...state.player3, life },
			player4: { ...state.player4, life },
		})),
}));
