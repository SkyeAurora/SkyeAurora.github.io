var posts=["2024/05/05/JobSearchLog/","2024/05/06/KMP/","2024/05/05/MinStack/","2024/05/04/SevenPrinciples/","2024/04/29/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };