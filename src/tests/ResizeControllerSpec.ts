/* eslint-disable no-undef */
import request from 'supertest';
import { app } from '../app';

function verifyCheckImagesWithSize(
  result: request.Response,
  w: any = null,
  h: any = null
) {
  let size = '';
  if (w && h) {
    size = `_${w}_${h}`;
  }
  expect(result.text).toContain(`encenadaport${size}.jpg`);
  expect(result.text).toContain(`fjord${size}.jpg`);
  expect(result.text).toContain(`icelandwaterfall${size}.jpg`);
  expect(result.text).toContain(`palmtunnel${size}.jpg`);
  expect(result.text).toContain(`santamonica${size}.jpg`);
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

describe('Test Resize Controller', () => {
  it('Requesting the original', async () => {
    const result = await request(app).get('').send();
    expect(result.status).toBe(200);
    verifyCheckImagesWithSize(result);
  });

  it('Requesting the resized but already cached Image', async () => {
    // Note that the dimension 500 and 400 has been cached already in thumbnail and should work
    let [w, h] = [500, 400];
    const result = await request(app).get(`/resize?w=${w}&h=${h}`).send();
    expect(result.status).toBe(200);
    verifyCheckImagesWithSize(result, w, h);
  });

  it('Requesting a randome size for all images, this will take a bit longer', async () => {
    let [w, h] = [getRandomInt(1, 1000), getRandomInt(1, 1000)];
    let result = await request(app).get(`/resize?w=${w}&h=${h}`).send();

    expect(result.status).toBe(200);
    verifyCheckImagesWithSize(result, w, h);
  }, 10_000); // wait a bit longer for sharp to read and write files


  it('Requesting resize of just one file ', async () => {
    let [w, h] = [getRandomInt(1, 1000), getRandomInt(1, 1000)];
    let result = await request(app).get(`/resize?filename=fjord&w=${w}&h=${h}`).send();

    let size = `_${w}_${h}`;
    expect(result.status).toBe(200);
    expect(result.text).toContain(`fjord${size}.jpg`);

    expect(result.text).not.toContain(`encenadaport${size}.jpg`);
    expect(result.text).not.toContain(`icelandwaterfall${size}.jpg`);
    expect(result.text).not.toContain(`palmtunnel${size}.jpg`);
    expect(result.text).not.toContain(`santamonica${size}.jpg`);
  }); 

});
