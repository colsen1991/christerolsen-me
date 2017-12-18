function reduceImage({title, alt, url}) {
  return {title, alt, url}
}

module.exports = (dato, root) => {
  root.directory('static/data', (dataDir) => {
    const blogPosts = dato.blogPosts

    dataDir.createPost('blog.json', 'json', {
      frontmatter: blogPosts.map(blogPost => {
        const {slug, title, image, excerpt, tags, updatedAt} = blogPost.toMap()

        return {
          slug,
          title,
          image: reduceImage(image),
          excerpt,
          tags,
          updatedAt
        }
      })
    })

    blogPosts.forEach(blogPost => {
      const {slug, title, image, excerpt, tags, content, updatedAt} = blogPost.toMap()

      dataDir.createPost(`blog/${slug}.json`, 'json', {
        frontmatter: {
          slug,
          title,
          image: reduceImage(image),
          excerpt,
          tags,
          content,
          updatedAt
        }
      })
    })
  })
}
