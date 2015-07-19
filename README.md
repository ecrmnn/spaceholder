# spaceholder
Download placeholder images from public domain sources

#### What?
Spaceholder makes it easy to download placeholder images when you need them.
Images are downloaded from Lorem Pixel, Placehold.it and PlaceImg.

#### Installation
Spaceholder requires that you have Node.js installed on you computer

    npm install -g spaceholder

#### Usage

    spaceholder
    // Downloads 1 photo (1024x768px) into current directory


    spaceholder -n 100
    // Downloads 100 photos into current directory


    spaceholder -s 800x600
    // Downloads 1 photo (800x600px) into current directory


    spaceholder -n 50 -s 800x600 -p LoremPixel
    // Downloads 50 photos (800x600px) from LoremPixel into current directory