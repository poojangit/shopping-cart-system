import readline from 'readline-sync';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

export function askQuestion(query){
    return new Promise(resolve => rl.question(query, answer => resolve(answer)))
}
export function closePrompt(){
    rl.close();
}
