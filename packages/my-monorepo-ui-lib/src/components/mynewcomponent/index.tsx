import React from 'react';

export interface MyNewComponentProps {
	text: string;
}

export const MyNewComponent = (props: MyNewComponentProps) => {
	return (<span>???HAMyNewComponent:~!{props.text}</span>)
}

export default MyNewComponent;