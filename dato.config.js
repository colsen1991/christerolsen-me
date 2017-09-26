module.exports = (dato, root) => {
  root.directory('static/data', (dataDir) => {
    const blogPosts = dato.blogPosts

    dataDir.createPost('blog.json', 'json', {
      frontmatter: blogPosts.map(blogPost => {
        const { slug, title, image, excerpt, tags, updatedAt } = blogPost.toMap()

        return { slug, title, image, excerpt, tags, updatedAt }
      })
    })

    blogPosts.forEach(blogPost => {
      dataDir.createPost(`${blogPost.slug}.json`, 'json', {
        frontmatter: {
          ...blogPost.toMap()
        }
      })
    })
  })
}
