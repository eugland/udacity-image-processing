import { Router, Request, Response, NextFunction } from 'express';
import path from 'path';

import { imagesPath, createThumbnailName, ImgDirMeta } from '../utils/utils';
import { checkIfImagesExist } from '../modules/checkImages';
import { finalImages } from '../modules/getFinalImages';
import resize from '../modules/transformImage';

interface resizedTypes {
  unResized: string[];
}

export const ResizeController: Router = Router();

ResizeController.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    const { h, w, filename } = req.query;
    let width = w ? parseInt(w as string, 10) : null;
    let height = h ? parseInt(h as string, 10) : null;
    const img = filename ? (filename as string) : null;
    const { inputPath, outputPath }: ImgDirMeta = imagesPath(__dirname);
    console.log("my width and height", width , height)
    let noParams = width === null && height === null || (isNaN(width as number) || isNaN(height as number));
    let noImagesError: boolean = false;
    let finalOutputFiles: string[] = [];

    if (!noParams) {
      const { unResized }: resizedTypes = checkIfImagesExist(
        width,
        height,
        img
      );

      if (unResized.length > 0) {
        // resizing goes here
        try {
          const format: string = 'jpeg';

          for (const file of unResized) {
            const inputImage: string = path.join(inputPath, file);
            const thumbnailFile: string = createThumbnailName(
              file,
              width,
              height
            );
            const thumbnailFilePath: string = path.join(
              outputPath,
              thumbnailFile
            );

            await resize(inputImage, thumbnailFilePath, format, width, height);
          }
        } catch (e) {
          // error processing image goes here
          console.log('Error occured while processing image');
        }
      }

      finalOutputFiles = finalImages(width, height, outputPath, img);
      if (unResized.length < 1 && finalOutputFiles.length < 1) {
        noImagesError = true;
      }
    }

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('give it some time for pics to show up');
      }, 300);
    });

    res.render('resize', {
      data: finalOutputFiles,
      noParams,
      noImagesError,
      width,
      height
    });
  }
);
