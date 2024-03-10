import { ConfigProvider, Space, theme } from "antd";
import CurrentHealth from "./Components/CurrentHealth";
import { MTGColor } from "./colors/colors";
import RemotePlayer from "./Components/RemotePlayer";

function App() {
	document.body.style.backgroundColor = MTGColor.Background;
	return (
		<ConfigProvider
			theme={{
				algorithm: theme.darkAlgorithm,
			}}>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}>
				<Space
					direction="vertical"
					style={{
						width: "100%",
						maxWidth: 450,
						padding: 20,
					}}>
					<CurrentHealth life={20} name={"Patsn"} color={MTGColor.AppleGreen} />
					<RemotePlayer life={40} name={"Jan"} color={MTGColor.PolyGreen} />
					<RemotePlayer life={38} name={"Fabi"} color={MTGColor.UraniumBlue} />
					<RemotePlayer life={17} name={"Stefan"} color={MTGColor.DarkGreen} />
				</Space>
			</div>
		</ConfigProvider>
	);
}

export default App;
