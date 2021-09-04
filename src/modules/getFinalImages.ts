import fs from 'fs';

export const finalImages = (
  w: number | null,
  h: number | null,
  outDir: string,
  img: string | null = null
): string[] => {
  let scope = fs
    .readdirSync(outDir)
    .filter(
      (file) =>
        `_${w}_${h}` === file.substring(file.indexOf('_'), file.indexOf('.'))
    );
  if (img != null) {
    scope = scope.filter((f) => f.startsWith(img));
  }
  return scope;
};
