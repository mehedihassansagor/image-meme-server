const router = require("express").Router();
const Memeimage = require("../models/Memeimage");

router.post("/post", async (req, res) => {
  try {
    console.log(req.body.imgURL);
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

router.delete("/delete", async (req,res)=>{
  try {
      await Memeimage.findByIdAndDelete({_id:req.body._id})
      res.status(200).json("delete successfully")
  } catch (err){
    res.status(404).json(err);
  }
})

module.exports = router;
