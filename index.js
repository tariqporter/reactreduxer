const path = require('path');
const fs = require("fs");
const ncp = require('ncp').ncp;

exports.run = () => {
	let config = process.argv.slice(2);
	let action = config[0];
	let dir = config[1];
    dir = path.resolve(dir);

	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}

	let componentName = path.basename(dir);
	
	switch(action.toLowerCase()) {
		case 'c':
		case 'create':
			createTemplates(componentName, dir);
			break;
		case 'n':
		case 'new':
			newTemplates(componentName, dir);
			break;
	}
}

function createTemplates(componentName, dir) {
	let componentTemplate = fs.readFileSync(path.join(__dirname, './templates/create/component.tsx'), 'utf8');
	componentTemplate = componentTemplate.replace(/{COMPONENT_NAME}/gi, componentName);
	fs.writeFileSync(`${dir}/${componentName}.tsx`, componentTemplate);

	let componentContainerTemplate = fs.readFileSync(path.join(__dirname, './templates/create/componentContainer.tsx'), 'utf8');
	componentContainerTemplate = componentContainerTemplate.replace(/{COMPONENT_NAME}/gi, componentName);
	fs.writeFileSync(`${dir}/${componentName}.Container.tsx`, componentContainerTemplate);

	fs.writeFileSync(`${dir}/${componentName}.test.tsx`, '');
	fs.writeFileSync(`${dir}/${componentName}.scss`, '');
	
	console.log(`Component ${componentName} created successfully!`);
}

function newTemplates(projectName, dir) {
	const newPath = path.join(__dirname, './templates/new');
	ncp(newPath, dir, (err) => {
		if (err) {
			console.log(`Error creating project ${projectName}`);
			return console.error(err);
		}
		
		const packagePath = path.join(newPath, './package.json');
		const packageTemplate = fs.readFileSync(packagePath, 'utf8').replace(/project-name/gi, projectName);
		fs.writeFileSync(packagePath, packageTemplate);
		
		console.log(`New project ${projectName} created successfully!\nPerform a yarn or npm install to install dependecnies.`);
	});
}