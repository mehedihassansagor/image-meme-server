const router = require("express").Router();
const Memeimage = require("../models/Memeimage");

router.post("/post", async (req, res) => {
  try {
    const newImage = new Memeimage(req.body);
    await newImage.save();
    res.status(200).json("Image upload successfully");
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const images = await Memeimage.find({});
    res.status(200).json(images);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/lastSevenDays", async (req, res) => {
  const startDate = new Date();
  const lastDate = new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000);
  try {
    const result = await Memeimage.find({
      createdAt: {
        $gte: new Date(new Date(lastDate).setHours(00, 00, 00)),
        $lt: new Date(new Date(startDate).setHours(23, 59, 59)),
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/lastSixDays", async (req, res) => {
  const startDate = new Date();
  const lastDate = new Date(new Date().getTime() - 6 * 24 * 60 * 60 * 1000);
  try {
    const result = await Memeimage.find({
      createdAt: {
        $gte: new Date(new Date(lastDate).setHours(00, 00, 00)),
        $lt: new Date(new Date(startDate).setHours(23, 59, 59)),
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/lastFiveDays", async (req, res) => {
  const startDate = new Date();
  const lastDate = new Date(new Date().getTime() - 5 * 24 * 60 * 60 * 1000);
  try {
    const result = await Memeimage.find({
      createdAt: {
        $gte: new Date(new Date(lastDate).setHours(00, 00, 00)),
        $lt: new Date(new Date(startDate).setHours(23, 59, 59)),
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/lastFourDays", async (req, res) => {
  const startDate = new Date();
  const lastDate = new Date(new Date().getTime() - 4 * 24 * 60 * 60 * 1000);
  try {
    const result = await Memeimage.find({
      createdAt: {
        $gte: new Date(new Date(lastDate).setHours(00, 00, 00)),
        $lt: new Date(new Date(startDate).setHours(23, 59, 59)),
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/lastThreeDays", async (req, res) => {
  const startDate = new Date();
  const lastDate = new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000);
  try {
    const result = await Memeimage.find({
      createdAt: {
        $gte: new Date(new Date(lastDate).setHours(00, 00, 00)),
        $lt: new Date(new Date(startDate).setHours(23, 59, 59)),
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/lastTwoDays", async (req, res) => {
  const startDate = new Date();
  const lastDate = new Date(new Date().getTime() - 2 * 24 * 60 * 60 * 1000);
  try {
    const result = await Memeimage.find({
      createdAt: {
        $gte: new Date(new Date(lastDate).setHours(00, 00, 00)),
        $lt: new Date(new Date(startDate).setHours(23, 59, 59)),
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/lastOneDays", async (req, res) => {
  const startDate = new Date();
  const lastDate = new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000);
  try {
    const result = await Memeimage.find({
      createdAt: {
        $gte: new Date(new Date(lastDate).setHours(00, 00, 00)),
        $lt: new Date(new Date(startDate).setHours(23, 59, 59)),
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.delete("/delete", async (req, res) => {
  try {
    await Memeimage.findByIdAndDelete({ _id: req.body._id });
    res.status(200).json("delete successfully");
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
