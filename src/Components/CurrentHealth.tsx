import { Space, Typography } from "antd";
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
	return (
		<div className="main-div" style={{ backgroundColor: color }}>
			<Space direction="vertical">
				<Typography.Title style={{ fontSize: 100 }}>{life}</Typography.Title>
				<Typography.Text>{name}</Typography.Text>
			</Space>
		</div>
	);
}

export default CurrentHealth;
