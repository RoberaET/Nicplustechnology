import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove "import React from 'react';"
  content = content.replace(/import React from 'react';\r?\n/g, '');
  
  // Replace "import React, { " with "import { "
  content = content.replace(/import React,\s*{\s*/g, 'import { ');

  // Fix Insight summary -> excerpt
  if (file.includes('InsightDetail.tsx') || file.includes('Insights.tsx')) {
    content = content.replace(/\.summary/g, '.excerpt');
  }

  // Fix unused imports in Home
  if (file.includes('Home.tsx')) {
    content = content.replace(/import { solutions } from '\.\.\/data\/solutions';\r?\n/, '');
  }

  // Fix unused in Projects
  if (file.includes('Projects.tsx')) {
    content = content.replace(/import { Button } from '\.\.\/components\/ui\/Button';\r?\n/, '');
    content = content.replace(/\s*\/\/ Extract unique categories[\s\S]*?\/\/ To keep it simple, we'll just hardcode some primary filters or use a subset\r?\n/m, '\n  // To keep it simple, we\'ll just hardcode some primary filters or use a subset\n');
  }

  // Fix type imports
  if (file.includes('ProjectCard.tsx')) {
    content = content.replace(/import { Project }/g, 'import type { Project }');
  }
  if (file.includes('ServiceCard.tsx')) {
    content = content.replace(/import { Service }/g, 'import type { Service }');
  }

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Fixed all files');
