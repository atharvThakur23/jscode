var censorewords = ["sad","bad","mad"];
var customCensorewords = [];
function censor(inStr)
{
    for(idx in customCensorewords)
    {
        inStr = inStr.replace(censorewords[idx],"****");
    }
    for(idx in customCensorewords)
    {
        inStr = inStr.replace(customCensorewords[idx],"****");
    }
    return inStr;
}
function addCensoreword(word)
{
    customCensorewords.push(word);
}
function getCensoryWord()
{
    return censorewords.concat(customCensorewords);
}
exports.censor = censor;
exports.addCensoreword = addCensoreword;
exports.getCensoryWord = getCensoryWord;