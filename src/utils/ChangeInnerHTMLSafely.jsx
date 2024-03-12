import DOMPurify from 'dompurify';
import whitelist from '../common/whitelist.js';

export const ChangeInnerHTMLSafely = HTML => {
  const sanitizer = () => DOMPurify.sanitize(HTML, whitelist);

  return <div dangerouslySetInnerHTML={{ __html: sanitizer(HTML) }} />;
};
