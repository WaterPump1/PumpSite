const fs = require("fs");
const path = require("path");
const convert = require("heic-convert");

const rootDir = path.join(__dirname, "..");
const galleryDir = path.join(rootDir, "images", "gallery");
const outputFile = path.join(rootDir, "gallery-data.js");
const jsonFile = path.join(rootDir, "data", "gallery.json");
const galleryJsFile = path.join(rootDir, "gallery.js");
const imageExt = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp", ".heic"]);

async function convertHeicFiles() {
  const files = fs.readdirSync(galleryDir);

  for (const file of files) {
    if (!file.toLowerCase().endsWith(".heic")) continue;

    const inputPath = path.join(galleryDir, file);
    const outputName = file.replace(/\.heic$/i, ".jpg");
    const outputPath = path.join(galleryDir, outputName);

    if (fs.existsSync(outputPath)) continue;

    const inputBuffer = fs.readFileSync(inputPath);
    const outputBuffer = await convert({
      buffer: inputBuffer,
      format: "JPEG",
      quality: 0.92,
    });

    fs.writeFileSync(outputPath, Buffer.from(outputBuffer));
    console.log("Converted:", file, "->", outputName);
  }
}

function writeGalleryData() {
  const photos = fs
    .readdirSync(galleryDir)
    .filter((file) => imageExt.has(path.extname(file).toLowerCase()))
    .filter((file) => !file.toLowerCase().endsWith(".heic"))
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
    .map((file) => ({
      url: `images/gallery/${file.replace(/\\/g, "/")}`,
      caption: "Gallery",
    }));

  const json = JSON.stringify(photos, null, 2);

  fs.writeFileSync(
    outputFile,
    "window.GALLERY_PHOTOS = " + json + ";\n",
    "utf8"
  );

  fs.writeFileSync(
    jsonFile,
    JSON.stringify({ photos: photos }, null, 2) + "\n",
    "utf8"
  );

  const galleryJs = fs.readFileSync(galleryJsFile, "utf8");
  const start = "// GALLERY_PHOTOS_START";
  const end = "// GALLERY_PHOTOS_END";
  const block =
    start +
    "\nvar GALLERY_PHOTOS_EMBEDDED = " +
    json +
    ";\n" +
    end;

  if (!galleryJs.includes(start) || !galleryJs.includes(end)) {
    throw new Error("gallery.js is missing GALLERY_PHOTOS markers");
  }

  const updated = galleryJs.replace(
    new RegExp(start + "[\\s\\S]*?" + end),
    block
  );

  fs.writeFileSync(galleryJsFile, updated, "utf8");
  console.log("Wrote", photos.length, "photos to gallery-data.js, data/gallery.json, and gallery.js");
}

async function main() {
  await convertHeicFiles();
  writeGalleryData();
}

main().catch(function (err) {
  console.error(err);
  process.exit(1);
});
