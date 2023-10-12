 

type Post = {
    id: string,
    title: string,
    des: string,
    date: Date
}

let posts: Post[] = [];

//handlers
export const getPosts =()=> posts;

//
export const addPost =(post: Post) => {
    posts.push(post);
}
// delete handler
export const deletePost= (id: string) => {
 posts = posts.filter((post)=> post.id !== id);
}
//update handler
export const updatePost=(id: string, title: string, des: string) => {
  // check for id if it exists
  const post = posts.find((post)=> post.id === id)
  if(post) {
    post.title = title;
    post.des = des;
  }
  else{
    throw new Error("No post found")
  }
}

// to get by id
export const getById = (id: string) => {
    return posts.find((post) => post.id === id)
}