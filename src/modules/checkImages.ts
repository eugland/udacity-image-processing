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
  const unResized: string[] = [];
  const { inputPath, outputPath }: ImgDirMeta = imagesPath(__dirname);
  const outputFiles: string[] = fs.readdirSync(outputPath);
  let inputFiles: string[] = fs.readdirSync(inputPath);

  inputFiles = clearFiles(inputFiles);

  inputFiles.forEach((file) => {
    const thumbnailFile: string = createThumbnailName(file, width, height);

    if (!outputFiles.includes(thumbnailFile)) {
      unResized.push(file);
    }
  });
  return new ImgMeta(unResized, inputFiles, outputFiles);
};
