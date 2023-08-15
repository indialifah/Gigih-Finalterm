import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
    {
        url_thumbnail: {
            type: String,
            required: true,
        }
    }
);

const Video = mongoose.model('Video', videoSchema);

export default Video;