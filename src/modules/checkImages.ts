import fs from 'fs';
import {
  imagesPath,
  clearFiles,
  createThumbnailName,
  ImgDirMeta
} from '../utils/utils';

export class ImgMeta {
  unResized: string[];
  inFiles: string[];
  outFiles: string[];

  constructor(unResized: string[], inFiles: string[], outFiles: string[]) {
    this.unResized = unResized;
    this.inFiles = inFiles;
    this.outFiles = outFiles;
  }
}

export const checkIfImagesExist = (
  width: number | null,
  height: number | null
): ImgMeta => {
  const { inputPath, outputPath }: ImgDirMeta = imagesPath(__dirname);
  const outputFiles: string[] = fs.readdirSync(outputPath);
  let inputFiles: string[] = fs.readdirSync(inputPath);

  inputFiles = clearFiles(inputFiles);

  let unResized = inputFiles.filter(
    (file) => !outputFiles.includes(createThumbnailName(file, width, height))
  );
  return new ImgMeta(unResized, inputFiles, outputFiles);
};
