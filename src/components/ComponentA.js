import React, { PureComponent } from 'react';
import ComponentB from './ComponentB';

export class ComponentA extends PureComponent {
	render() {
		return (
			<div>
				<ComponentB />
			</div>
		);
	}
}

export default ComponentA;
