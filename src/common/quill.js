import theme from '../styles/theme.js';

export const QUILL_MODULES = {
  toolbar: {
    container: [
      ['bold', 'italic', 'underline'],
      [
        { align: '' },
        { align: 'center' },
        { align: 'right' },
        { align: 'justify' },
      ],
      [{ list: 'bullet' }, { list: 'ordered' }],
    ],
  },
};

export const DEFAULT_QUILL_STYLE = {
  height: '260px',
  maxWidth: '720px',
  backgroundColor: theme.colors.white,
};
