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
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.js')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

const replacements = [
  // text-white → text-text-main (primary text color)
  [/\btext-white\b/g, 'text-text-main'],
  // bg-navy (icon background placeholder) → now a light blue tint
  // We'll handle this via tailwind config, just flag it
  // Also handle "text-navy" which is used in Button (primary bg text color)
  // text-navy stays as-is (it maps to config)
  // shadow colors referencing navy/dark are config-driven
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  replacements.forEach(([pattern, replacement]) => {
    content = content.replace(pattern, replacement);
  });
  fs.writeFileSync(file, content, 'utf8');
});

console.log('Done replacing text-white → text-text-main in all files');
