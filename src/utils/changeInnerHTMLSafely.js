import DOMPurify from "dompurify";
import whitelist from "../common/whitelist.js";

export const changeInnerHTMLSafely = (HTML) => {
    const sanitizedHTML = DOMPurify.sanitize(HTML, whitelist);
}