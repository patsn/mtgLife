import { ConfigProvider, Space, theme } from "antd";
import CurrentHealth from "./Components/CurrentHealth";
import RemotePlayer from "./Components/RemotePlayer";
import { usePlayerStore } from "./Store/playerStore";
import { MTGColor } from "./colors/colors";

function App() {
	document.body.style.backgroundColor = MTGColor.Background;
	document.body.style.overflow = "auto";

	const { player1, player2, player3, player4 } = usePlayerStore();

	return (
		<ConfigProvider
			wave={{ disabled: true }}
			theme={{
				algorithm: theme.darkAlgorithm,
			}}>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					touchAction: "none",
				}}>
				<Space
					direction="vertical"
					style={{
						width: "100%",
						maxWidth: 450,
						padding: 20,
					}}>
					<CurrentHealth
						life={player1.life}
						name={player1.name}
						color={player1.color}
					/>
					<RemotePlayer
						life={player2.life}
						name={player2.name}
						color={player2.color}
					/>
					<RemotePlayer
						life={player3.life}
						name={player3.name}
						color={player3.color}
					/>
					<RemotePlayer
						life={player4.life}
						name={player4.name}
						color={player4.color}
					/>
				</Space>
			</div>
		</ConfigProvider>
	);
}

export default App;
