# @ouroboros/react-radiobuttons-mui

[![npm version](https://img.shields.io/npm/v/@ouroboros/react-radiobuttons-mui.svg)](https://www.npmjs.com/package/@ouroboros/react-radiobuttons-mui) ![MIT License](https://img.shields.io/npm/l/@ouroboros/react-radiobuttons-mui.svg)

A React component using real buttons to simulate radio inputs

## Installation
npm
```bash
npm install @ouroboros/react-radiobuttons-mui
```

## Using
```javascript
import RadioButtons from '@ouroboros/react-radiobuttons-mui';

function App(props) {

	const [type, setType] = useState('email');

	return (
		<RadioButtons
			border={true}
			gridContainerProps={{spacing: 2}}
			gridItemProps={{ xs: 12, sm: 6 }}
			label="Type"
			onChange={setType}
			options={[
				{text: 'E-Mail', value: 'email'},
				{text: 'SMS', value: 'sms'}]}
			value={type}
			variant="grid"
		/>
	);
}
```

![example](https://raw.githubusercontent.com/ouroboroscoding/react-radiobuttons-mui/develop/images/example.png?raw=true)

## Props

| Name | Type | Required | Description |
|--|--|--|--|
| border | boolean | No | Display a border around the buttons |
| buttonProps | object | No | The props to pass to the Button components |
| defaultValue | string | No | The default/initial value of the radio |
| gridContainerProps | object | No | The props to pass to the Grid container if variant = grid |
| gridItemProps | object | No | The props to pass to the Grid items if variant = grid |
| label | string | No | The string to display above the buttons |
| onChange | function | No | The function called with the new value (string) => void |
| options | object[] | Yes | The list of value and text of each button, if text is not passed, value is used for both |
| value | string | No | The current value |
| variant| 'free' \| 'grid' | No | The method to use to display the buttons. Using 'free' simply creates one button after the other with no styling. Using 'grid' allows you to set Grid props for containers (gridContainerProps) and items (gridItemProps) |
