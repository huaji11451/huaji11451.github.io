var posts=["2025/10/27/hello-world/","2025/10/27/博客名/","2025/11/07/aquadream/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };