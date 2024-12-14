import { customAlphabet } from "nanoid";

const model = {};
const nanoid = customAlphabet("Украфівіячс1234?-_&&", 20);
model.id = nanoid();

console.log(model);


