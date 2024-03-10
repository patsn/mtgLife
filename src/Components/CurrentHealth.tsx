import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import { usePlayerStore } from "../Store/playerStore";

import "./Styles/CurrentHealth.css";

function CurrentHealth({
	life,
	name,
	color,
}: {
	life: number;
	name: string;
	color: string;
}): JSX.Element {
	const { player1, setPlayer1Life, setPlayer1Color } = usePlayerStore();

	return (
		<div className="main-div" style={{ backgroundColor: player1.color }}>
			<Button
				onClick={() => {
					setPlayer1Life(player1.life - 1);
				}}
				type="primary"
				style={{
					backgroundColor: "rgba(0,0,0,0)",
					width: 205,
					height: "calc(70vh - 20px)",
					position: "absolute",
					top: 20,
					left: "calc(50vw - 225px)",
				}}>
				<MinusOutlined />
			</Button>
			<Button
				onClick={() => {
					setPlayer1Life(player1.life + 1);
				}}
				type="primary"
				style={{
					backgroundColor: "rgba(0,0,0,0)",
					width: 205,
					height: "calc(70vh - 20px)",
					position: "absolute",
					top: 20,
					right: "calc(50vw - 225px)",
				}}>
				<PlusOutlined />
			</Button>
			<Space direction="vertical">
				<Typography.Title style={{ fontSize: 100 }}>{life}</Typography.Title>
				<Typography.Text>{name}</Typography.Text>
			</Space>
		</div>
	);
}

export default CurrentHealth;
