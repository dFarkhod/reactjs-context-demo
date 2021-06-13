import React, { PureComponent } from 'react'
import ComponentA from './components/ComponentA'
import { UserProvider } from './components/userContext';

class App extends PureComponent {
	render() {
		return (
			<UserProvider value="Farhod">
				<ComponentA />
			</UserProvider>
		);
	}
}

export default App;
