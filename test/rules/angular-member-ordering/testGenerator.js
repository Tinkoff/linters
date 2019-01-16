/* eslint-disable */

/**
 * This file contains code which generates tests for `AngularMemberOrdering` rule.
 *
 * Change `order` variable to change order of members.
 */

const fs = require('fs');
const file = 'test.ts.lint';

const tab = '   ';
const failure = '~';

const order = [
	'public-static',
	'@Input',
	'@Output',
	'public-instance',
	'protected-static',
	'protected-instance',
	'private-static',
	'private-instance'
];

const defaultMemberData = {
	'public-static': {
		rank: 0,
		text: 'PUBLIC STATIC property'
	},
	'protected-static': {
		rank: 1,
		text: 'PROTECTED STATIC property'
	},
	'private-static': {
		rank: 2,
		text: 'PRIVATE STATIC property'
	},
	'@Input': {
		rank: 3,
		text: '@Input'
	},
	'@Output': {
		rank: 4,
		text: '@Output'
	},
	'public-instance': {
		rank: 5,
		text: 'PUBLIC INSTANCE property'
	},
	'protected-instance': {
		rank: 6,
		text: 'PROTECTED INSTANCE property'
	},
	'private-instance': {
		rank: 7,
		text: 'PRIVATE INSTANCE property'
	}
};

const variableValues = [
	`a;\n`,
	`a = 5;\n`,
	`a = 'someString';\n`,
	`a: string;\n`,
	`a: number = 5;\n`
];

function getRandomVariable() {
	return variableValues[Math.floor(Math.random() * variableValues.length)];
}

const errors = {};

let memberData = defaultMemberData;

function failureStringWithNumb(nextNode, prevNode, number) {
	return `[${number}]: ${nextNode} must be before ${prevNode}\n`;
}

function memberOrderingParse() {
	let counter = 0;

	for (const member of order) {
		memberData[member].rank = counter;
		counter += 1;
	}
}

function generateFailures() {
	let counter = 0;

	for (let i = 0; i < order.length; i++) {
		for (let j = i + 1; j < order.length; j++) {
			errors[`${i}-${j}`] = `[${counter}]`;
			counter += 1;
		}
	}
}

function writeFailures() {
	let counter = 0;

	for (let i = 0; i < order.length; i++) {
		for (let j = i + 1; j < order.length; j++) {
			fs.appendFileSync(
				file,
				failureStringWithNumb(
					memberData[order[i]].text,
					memberData[order[j]].text,
					counter
				)
			);
			counter += 1;
		}
	}
}

function parseField(index) {
	let fieldType;
	let fieldTypeArr = order[index].split('-');

	if (fieldTypeArr[0] === 'public') {
		if (Math.random() > 0.5) {
			fieldTypeArr[0] = '';
		}
	}

	if (fieldTypeArr[0] === '@Input' || fieldTypeArr[0] === '@Output') {
		fieldType = fieldTypeArr[0] + '()';
	} else if (fieldTypeArr[1] === 'instance') {
		fieldType = fieldTypeArr[0];
	} else {
		if (fieldTypeArr[0] !== '') {
			fieldType = fieldTypeArr.join(' ');
		} else {
			fieldType = fieldTypeArr[1];
		}
	}

	return fieldType;
}

function makeField(type) {
	const field =
		type === '' ? type + getRandomVariable() : type + ' ' + getRandomVariable();

	return field;
}

function generateRightCases() {
	fs.appendFileSync(file, '\n// Right cases\n\n');

	for (let caseNumb = 0; caseNumb < 3; caseNumb++) {
		fs.appendFileSync(file, `class right-cases {\n`);

		for (let i = 0; i < order.length; i++) {
			const fieldType = parseField(i);
			const field = makeField(fieldType);

			fs.appendFileSync(file, tab + field);
		}

		fs.appendFileSync(file, '}\n\n');
	}
}

function makeFailure(firstIndex, secondIndex) {
	const firstFieldType = parseField(firstIndex);
	const secondFieldType = parseField(secondIndex);

	const firstField = makeField(firstFieldType);
	const secondField = makeField(secondFieldType);

	const repeatFailure =
		firstFieldType === ''
			? failure.repeat(1)
			: firstFieldType.startsWith('@')
			? failure.repeat(firstFieldType.length - 2)
			: failure.repeat(firstFieldType.length);

	fs.appendFileSync(file, tab + secondField);
	fs.appendFileSync(file, tab + firstField);
	fs.appendFileSync(
		file,
		tab +
			repeatFailure +
			tab.repeat(3) +
			errors[`${firstIndex}-${secondIndex}`] +
			'\n\n'
	);
}

function generateWrongCases() {
	fs.appendFileSync(file, '// Wrong cases\n\n');

	for (let i = 0; i < order.length - 1; i++) {
		fs.appendFileSync(file, `// Wrong cases for ${order[i]}-fields\n`);

		for (let repeats = 0; repeats < 3; repeats++) {
			fs.appendFileSync(file, `class failures {\n`);

			for (let j = i + 1; j < order.length; j++) {
				makeFailure(i, j);
			}

			fs.appendFileSync(file, '}\n\n');
		}
	}
}

(function generateTests() {
	fs.writeFileSync(file, '');

	memberOrderingParse();

	generateFailures();

	generateRightCases();

	generateWrongCases();

	writeFailures();
})();
