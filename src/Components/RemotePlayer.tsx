import { Space, Typography } from "antd";
import "./Styles/RemotePlayer.css";

function RemotePlayer({
	life,
	name,
	color,
}: {
	life: number;
	name: string;
	color: string;
}): JSX.Element {
	return (
		<Space
			direction="vertical"
			className="main-space"
			style={{ backgroundColor: color }}>
			<Typography.Text>{name}</Typography.Text>
			<Typography.Text>{life}</Typography.Text>
		</Space>
	);
}

export default RemotePlayer;
