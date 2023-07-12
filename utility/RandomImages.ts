import sharp from "sharp";

function generateArrayImages(): string[] {
  let images: string[] = [];
  const dirPath: string = "assets/images/samples/cars";

  for (let i = 1; i <= 20; i++) {
    let fileName: string = `image-${i}.jpeg`;
    let filePath: string = `${dirPath}/${fileName}`;

    images.push(filePath);
  }

  return images;
}

export async function displayRandomPhoto(width: number, height: number) {
  const photos: string[] = generateArrayImages();
  const randomIndex: number = Math.floor(Math.random() * photos.length);
  const randomPhoto: string = photos[randomIndex];
  const resizedAndCroppedPhotoBuffer: Buffer = await sharp(randomPhoto)
    .resize({ width: width, height: height, fit: "cover" })
    .toBuffer();
  const resizedAndCroppedPhotoDataUrl: string = `data:image/jpeg;base64,${resizedAndCroppedPhotoBuffer.toString(
    "base64"
  )}`;
  return resizedAndCroppedPhotoDataUrl;
}
