export const usePostFormat = (post) => {
    const id = post._id;
    const title = post.title;
    const desc = post.body;
    const tags= post.tags;
    const photo = post.photo;
    const date = post.date.substring(0, 10);
  return {
        id,
        title,
        desc,
        tags,
        photo,
        date,
    };
};


/*
   title: { type: String, required: true },
    body: { type: String, required: true },
    tags: { type: String, required: true },
    photo: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    date: { type: Date, default: Date.now },
*/