const path = require('path');
const fs = require("fs");

exports.run = () => {
	let config = process.argv.slice(2);
	let action = config[0];
	let dir = config[1];
    dir = path.resolve(dir);

	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}

	let componentName = path.basename(dir);

	let componentTemplate = fs.readFileSync(path.join(__dirname, './templates/component.tsx'), 'utf8');
	componentTemplate = componentTemplate.replace(new RegExp('{COMPONENT_NAME}', 'gi'), componentName);
	fs.writeFileSync(`${dir}/${componentName}.tsx`, componentTemplate);

	let componentContainerTemplate = fs.readFileSync(path.join(__dirname, './templates/componentContainer.tsx'), 'utf8');
	componentContainerTemplate = componentContainerTemplate.replace(new RegExp('{COMPONENT_NAME}', 'gi'), componentName);
	fs.writeFileSync(`${dir}/${componentName}.Container.tsx`, componentContainerTemplate);

	fs.writeFileSync(`${dir}/${componentName}.test.tsx`, '');
	fs.writeFileSync(`${dir}/${componentName}.scss`, '');

	console.log(`Component ${componentName} created successfully!`);
}