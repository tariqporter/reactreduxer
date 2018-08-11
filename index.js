const path = require('path');
const fs = require("fs");

exports.run = () => {
	let config = process.argv.slice(2);
	let dir = config[0];
    dir = path.resolve(dir);
    
    console.log(config);
    return;

	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}

    let componentName = path.basename(dir);
    
    let componentTemplate = fs.readFileSync(path.join(__dirname, './templates/componentTemplate.tsx'), 'utf8');
    let componentContainerTemplate = fs.readFileSync(path.join(__dirname, './templates/componentContainerTemplate.tsx'), 'utf8');


	//let js = getDirective(componentName, vendorPrefix);
	//let directivePath = path.join(dir, componentName + ".js");
	//fs.writeFileSync(directivePath, js);
	//let html = getTemplate();
	//let templatePath = path.join(dir, componentName + ".html");
	//fs.writeFileSync(templatePath, html);
	//console.log(`Directive ${componentName} created`)
}