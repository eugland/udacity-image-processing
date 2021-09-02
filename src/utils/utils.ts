import path from 'path';

export class ImgDirMeta {
  inputPath: string;
  outputPath: string;

  constructor(inputPath: string, outputPath: string) {
    this.inputPath = inputPath;
    this.outputPath = outputPath;
  }
}
export const imagesPath = (dirname: string): ImgDirMeta => {
  const pathList = dirname.split(path.sep);
  pathList.pop();
  return new ImgDirMeta(
    path.join(pathList.join(path.sep), 'public', 'images', 'full'),
    path.join(pathList.join(path.sep), 'public', 'images', 'thumbnails')
  );
};

export const clearFiles = (files: string[]): string[] =>
  files.filter((name) => !name.startsWith('.'));

export const createThumbnailName = (
  file: string,
  width: number | null,
  height: number | null
): string => {
  const [filename, ext] = file.split('.');
  return `${filename}_${width}_${height}.${ext}`;
};
