const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const camelcase = require('lodash.camelcase');

function readFilesInFolder(folderPath, toCamelCase = true, baseFolder = '') {
    const fullPath = path.join(process.cwd(), folderPath);

    const output = {};

    function readDir(dirPath, outputPath) {
        const files = fs.readdirSync(dirPath);

        files.forEach(file => {
            const currentPath = path.join(dirPath, file);
            const stats = fs.statSync(currentPath);

            if (stats.isDirectory()) {
                readDir(currentPath, path.join(outputPath, file));
            } else {
                const key = file.split('.')[0];
                const fileKey = toCamelCase ? camelcase(key) : key;
                const relativeFilePath = path.join(outputPath, fileKey);
                output[relativeFilePath] = fs.readFileSync(currentPath, 'utf8');
            }
        });
    }

    readDir(fullPath, baseFolder);

    return output;
}

function makePages(pages, templates) {
    Object.keys(pages).forEach((pagePath) => {
        const pageSource = pages[pagePath];
        const hbsTemplate = handlebars.compile(pageSource);
        const html = hbsTemplate(templates);
        const outputPath = path.join('public', pagePath + '.html');

        const outputDir = path.dirname(outputPath);
        fs.mkdirSync(outputDir, { recursive: true });

        fs.writeFileSync(outputPath, html, 'utf-8');
    });
}

const templates = readFilesInFolder('./@templates', true);
const pages = readFilesInFolder('./@pages', false);

makePages(pages, templates);