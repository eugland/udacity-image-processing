import fs from 'fs';

export const finalImages = (
  w: number | null,
  h: number | null,
  outDir: string
): string[] =>
  fs
    .readdirSync(outDir)
    .filter(
      (file) =>
        `_${w}_${h}` === file.substring(file.indexOf('_'), file.indexOf('.'))
    );
