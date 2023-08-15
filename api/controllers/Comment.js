import { createCommentService, getAllCommentsService, getCommentByIdService, getCommentByVideoIdService} from '../services/Comment.js';

export const createComment = async (req, res) => {
    const {username, comment_text, video_id} = req.body;

    const newComment = await createCommentService(username, comment_text, video_id);

    res.status(201).json({data: newComment});
};

export const getAllComments = async (req, res) => {
    const allComments = await getAllCommentsService();

    res.status(201).json({data: allComments});
};

export const getCommentById = async (req, res) => {
    const {id} = req.params;

    const comment = await getCommentByIdService(id);

    res.json({data: comment});
};

export const getCommentByVideoId = async (req, res) => {
    const {video_id} = req.params;

    const videoComment = await getCommentByVideoIdService(video_id);

    res.json({data: videoComment});
}