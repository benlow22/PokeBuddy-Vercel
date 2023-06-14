import React from "react";
import { Switch, Space } from "antd";

export const STABbutton = () => (
	<Space direction="vertical">
		<Switch checkedChildren="show STAB" unCheckedChildren="hide" />
	</Space>
);
