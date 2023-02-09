import React from "react";
import { storiesOf } from "@storybook/react";
import InputBtn from "./inputBtn"

import "./inputButton.css"

storiesOf('InputBtn', module)
.add('InputBtn', () => <InputBtn
placeholder="voucher"
label="Redeem"
size="small"
/>)
.add('InputBtn Large', () => <InputBtn 
placeholder="voucher"
label="Redeem"
size="large"
/>)