/* eslint-disable no-undef */
// import isPrime from './isPrime';
import * as utils from '../utils/utils';
import fs from 'fs';
import { checkIfImagesExist, ImgMeta } from '../modules/checkImages';
import path from 'path';

describe('Check if images exist', () => {
  it('Testing the default files exist before all else', () => {
    // do something that calls the genName function
    // console.log(checkIfImagesExist(null, null));
    expect(checkIfImagesExist(null, null)).toBeInstanceOf(ImgMeta);
  });
});
