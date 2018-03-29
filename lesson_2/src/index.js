import React from 'react';
import ReactDOM from 'react-dom';
import Developer from './components/Developer';
import Dateshower from './components/Dateshower';

ReactDOM.render(<div>
	<Developer name={'Mark'} surname={'Russinivich'} className={'developer'}/>
	<Dateshower />
</div>, document.getElementById('root'));
