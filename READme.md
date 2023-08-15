# Final Term GG3.0

This project is a Tokopedia Play Replication Web for Final Term on Generasi Gigih 3.0 ✨

It use some tools such as,
*[ExpressJS](https://expressjs.com/)
*[Mongoose](https://mongoosejs.com/) (For MongoDB Connectors)
*[ReactJS by Vite](https://vitejs.dev/guide/)

## Database Structure
This project using the document-based database, yup it's MongoDB!

### Comments Collection
The `comment` collection follows the following schema:

- `username` (String, required): The username of the commenter.
- `comment_text` (String, required): The actual comment text.
- `video_id` (String, required): The unique identifier of the video associated with the comment.
- `create_at` (String, default: Date.now): The timestamp of when the comment was created.

### Products Collection
The `product` collection follows the schema below:

- `link` (String): The link to the product.
- `title` (String, required): The title of the product.
- `price` (Number, required): The price of the product.
- `video_id` (String, required): The unique identifier of the video associated with the product.

### Videos Collection
The `video` collection follows the schema below:

- `url_thumbnail` (String, required): The URL of the video thumbnail.

