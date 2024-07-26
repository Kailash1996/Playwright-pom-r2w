import * as fs from 'fs';
import * as path from 'path';



export function readJsonFile<T>(relativeFilePath: string): T {
    const absoluteFilePath = path.resolve(__dirname, relativeFilePath);
    
    const data = fs.readFileSync(absoluteFilePath, 'utf-8'); 
    return JSON.parse(data) as T;
}

export function returnAbsoultePath(relativeFilePath: string){
    return (path.resolve(__dirname, relativeFilePath));
}


