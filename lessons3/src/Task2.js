import React from 'react';
import './nav.css';
import { NumberList } from './NumberList';

export function Task2 () {
	    return (
	      <div id="task-wraper">
	        <NumberList items={["Home", "Search", "About", "Contact"]} />
	      </div>
	    );
}