import path from "node:path"
import { parse} from "../utils/json"
const jsonDbPath = path.join(__dirname,"../data/texts.json");
import { Text } from "../types"
//import { v4 as randomId} from 'uuid'


const defaultTexts: Text[] = [
    {id:"3568dcad-3fcc-405b-b034-78f12cecbd18", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", level: "easy"},
    {id:"54666728-86b9-497a-9a6d-5e000f035f03", content:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", level: "medium"},
    {id:"a28453a3-f818-417f-841b-f9b3d075b30a", content:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", level: "hard"},
    {id:"d43bdc58-1d25-4dd6-ba24-24161e5bb86b", content:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", level: "easy"},
    {id:"f0a3a3a9-c97a-444a-8840-ea06be06db83", content:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", level: "medium"},
    {id:"35110d9f-e4a5-40e1-9ef5-ad7b09215d77", content:"Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.", level: "hard"}
];


function readAllTexts(level?: string): Text[]{
    const texts = parse(jsonDbPath, defaultTexts);
    if(!level){
        return texts;
    };

    const filteredTexts = texts.filter(t => t.level === level);
    return filteredTexts;
};

function readOneText(id: string): Text | undefined{
    const texts = parse(jsonDbPath,defaultTexts);

    const text = texts.find(t => t.id === id);

    if(!text){
        return undefined;
    }
    return text;
}




export { readAllTexts, readOneText };