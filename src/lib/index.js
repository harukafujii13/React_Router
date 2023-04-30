export const getPosts = async() => {
  try{
    const response = await fetch(`https://jsonplaceholder.typicod}e.com/posts/${postId}`)
    const posts = await response.json()
    return posts;
  }catch (err){
    console.log(err);
  }
}

export const getPost = async(postId) => {
  try {
  const response = await fetch(`https://jsonplaceholder.typicod}e.com/posts/${postId}`);
  const post = await response.json();
  return post;
}catch{
  console.log(err)
}

}