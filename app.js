let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".com", ".net", ".org", ".us", ".io"];

for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
            for (let e = 0; e < extensions.length; e++){

                let generateRandom = pronoun[i] + adj[a] + noun[n] + extensions[e];
                console.log(generateRandom);
            }
        }
    }
}
