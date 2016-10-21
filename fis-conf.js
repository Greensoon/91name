fis.match('*.less', {
  parser: fis.plugin('less'),
  rExt: '.css'
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js'),
});