css_Images: function(doc) {
    if (fileEnding === "png" || fileEnding === "jpg" || fileEnding === "jpeg") {
    return doc +
         '.image {\n' +
  'display: inline-block;\n' +
  'page-break-inside: avoid;\n' +
  'width: 100%;\n' +
  'height: auto;\n' +
  'text-align: center;\n' +
  'margin: 1em 0 0.3em 0;\n' +
  '}' +
  'img { max-width: 100%; max-height: 100%; }\n'; }
  else { return doc }
},
