const http = new EasyHTTP();

const data = {
  userId: 69,
  title: 'Custom post',
  body: 'This is a custom post',
};

const data2 = {
  userId: 420,
  title: 'Custom post',
  body: 'This is a custom post',
};

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// Post a new post
http.post('https://jsonplaceholder.typicode.com/posts/101', data, function (
  err,
  posts
) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// Update a post
http.put('https://jsonplaceholder.typicode.com/posts/101', data2, function (
  err,
  posts
) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// Delete a post
http.delete('https://jsonplaceholder.typicode.com/posts/69', function (
  err,
  post
) {
  console.log(post);
});
