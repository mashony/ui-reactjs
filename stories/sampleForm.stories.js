import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import store from './configureStore';
import SampleForm from './sampleForm';

import { Values } from 'redux-form-website-template'

const SignupForm = props => (
	<div>saddas</div>
)

//const store = configureStore(browserHistory);

const handleSubmit = (event) => {
	event.preventDefault();
	console.log("Form values:", event);
	console.log('Submitted!');
}

storiesOf('Forms', module)
	.addDecorator(story => <Provider store={store}>{story()}</Provider>)
	.add('Sample Form', () => (
		<div>
			<Values form="SimpleForm" />
			<SampleForm handleSubmit={handleSubmit} initialValues={{ cfm_comp: "US", date: "2018-04-07" }}/>
		</div>));