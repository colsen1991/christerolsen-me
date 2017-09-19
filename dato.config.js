module.exports = (dato, root) => {
  root.directory('static/data', (dataDir) => {
    dataDir.createPost('test.json', 'json', {
      frontmatter: dato.tests.map(test => test.toMap())
    })
  })
}
