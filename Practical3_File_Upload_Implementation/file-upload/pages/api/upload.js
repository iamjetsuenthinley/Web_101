import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: "Upload failed" });
    }

    const file = files.file;

    // Save file
    const data = fs.readFileSync(file.filepath);
    fs.writeFileSync(`./public/${file.originalFilename}`, data);

    return res.status(200).json({ message: "File uploaded successfully" });
  });
}