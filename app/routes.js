const express = require('express')
const router = express.Router()

// Branching
router.post('/version_1/child_letter', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['over-18']

  if (over18 === 'false') {
    res.redirect('/version_1/about_myself')
  } else {
    res.redirect('/version_1/child_letter')
  }
})

module.exports = router