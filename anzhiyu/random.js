var posts=["2024/05/05/JobSearchLog/","2024/05/04/SevenPrinciples/","2024/04/29/hello-world/","2024/05/05/MinStack/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };