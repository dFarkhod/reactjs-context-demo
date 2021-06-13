import React, { PureComponent } from 'react';
import ComponentC from './ComponentC';

export class ComponentB extends PureComponent {
	render() {
		return (
			<div>
				<ComponentC />
			</div>
		);
	}
}

export default ComponentB;
