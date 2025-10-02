import path from "node:path"
import { parse, serialize} from "../utils/json"
const jsonDbPath = path.join(__dirname,"../data/texts.json");
import { Text } from "../types"
import {v4} from 'uuid'


const defaultTexts: Text[] = [
    {id:v4(), content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", level: "easy"},
    {id:v4(), content:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", level: "medium"},
    {id:v4(), content:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", level: "hard"},
    {id:v4(), content:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", level: "easy"},
    {id:v4(), content:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", level: "medium"},
    {id:v4(), content:"Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.", level: "hard"}
];


function readAllTexts(level?: string): Text[]{
    const texts = parse(jsonDbPath, defaultTexts);
    if(!level){
        return texts;
    };

    const filteredTexts = texts.filter(t => t.level === level);
    return filteredTexts;
};

function readOneText(id: number): Text | undefined{
    const texts = parse(jsonDbPath,defaultTexts);

    const text = texts.find(t => t.id === id);

    if(!text){
        return undefined;
    }
    return text;
}




export { readAllTexts, readOneText };