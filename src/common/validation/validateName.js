export function isValidName(text, minLength, maxLength) {
    if(text === '') return;

    const validationRegex = /^[a-zA-Z가-힣]*$/
    const length = Array.from(text).map((char) => {
        const isKOR = char >= '\u1100' && char <= '\uD7AF';
        const isENG = char >= 'a' && char <= 'z';

        return isKOR ? 2 : isENG ? 1 : 0;
    }).reduce((acc, count) => acc + count, 0);

    const validateRegexResult = validationRegex.test(text);
    const validateTextLengthResult = (length >= minLength && length <= maxLength);
    const validateTextRealLengthResult = (text.length >= minLength && text.length <= maxLength);

    return !(validateRegexResult && validateTextLengthResult && validateTextRealLengthResult) ?
        "true" : "false";
}