const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const camelcase = require('lodash.camelcase');

function readFilesInFolder(folderPath, toCamelCase = true) {
    // Join the current working directory with the provided folder path
    const fullPath = path.join(process.cwd(), folderPath);

    try {
        // Read the contents of the folder
        const files = fs.readdirSync(fullPath);

        // Filter out only files (excluding directories)
        const fileSources = files
            .filter(fileName => fs.statSync(path.join(fullPath, fileName)).isFile())
            .map(el => {
                key = el.split('.')[0];
                return {
                    file: toCamelCase ? camelcase(key) : key,
                    source: fs.readFileSync(`${fullPath}/${el}`, 'utf8')
                }
            })

        const output = {};
        fileSources.forEach(el => {
            output[el.file] = el.source
        })

        // Return the array of file names
        return output;
    } catch (error) {
        console.error(`Error reading files in folder ${folderPath}: ${error.message}`);
        return [];
    }
}

const makePages = (pages, templates) => {
    
    Object.keys(pages).forEach((pageName) => {
        const pageSource = pages[pageName];
        const hbsTemplate = handlebars.compile(pageSource);
        const html = hbsTemplate(templates);
        fs.writeFileSync(`./public/${pageName}.html`, html, 'utf-8');
    });
}


const templates = readFilesInFolder('./@templates', toCamelCase = true);
const pages = readFilesInFolder('./@pages', toCamelCase = false);

makePages(pages, templates);

