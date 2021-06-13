import React, { PureComponent } from 'react';
import { UserConsumer } from './userContext';

export class ComponentD extends PureComponent {
	render() {
		return (
			<UserConsumer>
				{
					(userName) => {
						return <div>Assalomu alaykum, {userName}</div>
					}
				}
			</UserConsumer>
		);
	}
}

export default ComponentD;
