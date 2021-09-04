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
  height: number | null,
  img: string | null = null
): ImgMeta => {
  let unResized: string[] = [];
  let { inputPath, outputPath }: ImgDirMeta = imagesPath(__dirname);
  let outputFiles = fs.readdirSync(outputPath);
  let inputFiles = fs.readdirSync(inputPath);

  if (img != null) {
    inputFiles = inputFiles.filter((name) => name.startsWith(img));
    outputFiles = outputFiles.filter((name) => name.startsWith(img));
  }

  inputFiles = clearFiles(inputFiles);

  inputFiles.forEach((file) => {
    const thumbnailFile: string = createThumbnailName(file, width, height);

    if (!outputFiles.includes(thumbnailFile)) {
      unResized.push(file);
    }
  });
  return new ImgMeta(unResized, inputFiles, outputFiles);
};
