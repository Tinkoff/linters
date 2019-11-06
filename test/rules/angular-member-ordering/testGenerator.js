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
    'private-instance-field',
    'private-static-field',
    'protected-static-field',
    'protected-instance-field',
    'public-instance-field',
    'public-static-field',
    '@Input',
    '@Output',
    'public-instance-method',
    'public-static-method',
    'protected-instance-method',
    'protected-static-method',
    'private-instance-method',
    'private-static-method',
];
const defaultMemberData = {
    'private-instance-field': {
        rank: 0,
        text: 'PRIVATE INSTANCE property',
    },
    'private-static-field': {
        rank: 1,
        text: 'PRIVATE STATIC property',
    },
    'protected-static-field': {
        rank: 2,
        text: 'PROTECTED STATIC property',
    },
    'protected-instance-field': {
        rank: 3,
        text: 'PROTECTED INSTANCE property',
    },
    'public-instance-field': {
        rank: 4,
        text: 'PUBLIC INSTANCE property',
    },
    'public-static-field': {
        rank: 5,
        text: 'PUBLIC STATIC property',
    },
    '@Input': {
        rank: 6,
        text: '@Input',
    },
    '@Output': {
        rank: 7,
        text: '@Output',
    },
    'public-instance-method': {
        rank: 8,
        text: 'PUBLIC INSTANCE METHOD',
    },
    'public-static-method': {
        rank: 9,
        text: 'PUBLIC STATIC METHOD',
    },
    'protected-instance-method': {
        rank: 10,
        text: 'PROTECTED INSTANCE METHOD',
    },
    'protected-static-method': {
        rank: 11,
        text: 'PROTECTED STATIC METHOD',
    },
    'private-instance-method': {
        rank: 12,
        text: 'PRIVATE INSTANCE METHOD',
    },
    'private-static-method': {
        rank: 13,
        text: 'PRIVATE STATIC METHOD',
    },
};

const variableValues = [
    `a;`,
    `a = 5;`,
    `a = 'someString';`,
    `a: string;`,
    `a: number = 5;`,
];

const methods = [
    'a() {return 5};',
    'b(): number {return 5};',
    'c(a: number): number {return a};',
];

function getRandomVariable() {
    return variableValues[Math.floor(Math.random() * variableValues.length)];
}

function getRandomMethod() {
    return methods[Math.floor(Math.random() * methods.length)];
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
                    counter,
                ),
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
        fieldTypeArr.splice(1, 1);
        fieldType = fieldTypeArr.join(' ');
    } else {
        if (fieldTypeArr[0] !== '') {
            fieldType = fieldTypeArr.join(' ');
        } else {
            fieldTypeArr.splice(0, 1);
            fieldType = fieldTypeArr.join(' ');
        }
    }
    return fieldType;
}

function makeField(type) {
    if (!type) {
        return getRandomVariable() + '\n';
    }
    if (type.endsWith('method')) {
        return (type.slice(0, -7) + ' ' + getRandomMethod()).trim() + '\n';
    }

    if (type.endsWith('field')) {
        return (type.slice(0, -6) + ' ' + getRandomVariable()).trim() + '\n';
    }
    return type + ' ' + getRandomVariable() + '\n';
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

    const repeatFailure = getRepeatedFailures(firstFieldType);

    fs.appendFileSync(file, tab + secondField);
    fs.appendFileSync(file, tab + firstField);
    fs.appendFileSync(
        file,
        tab +
            repeatFailure +
            tab.repeat(3) +
            errors[`${firstIndex}-${secondIndex}`] +
            '\n\n',
    );
}

function getRepeatedFailures(fieldType) {
    if (!fieldType) {
        return failure;
    }

    if (fieldType.startsWith('@')) {
        return failure.repeat(fieldType.length - 2);
    }

    if (fieldType.endsWith('field')) {
        return failure.repeat(fieldType.length - 6);
    }

    if (fieldType.endsWith('method')) {
        return failure.repeat(fieldType - 7);
    }

    return failure.repeat(fieldType.length || 1);
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
