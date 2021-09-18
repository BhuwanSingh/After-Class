const {
  // validateUser,
  // signup,
  // authenticate,
  // listUsers,
  // search,
  // find
  register,
  signIn,
  about
} = require('../controllers/user');
const {
  loadQuestions,
  questionValidate,
  createQuestion,
  show,
  listQuestions,
  listByTags,
  listByUser,
  removeQuestion
} = require('../controllers/questions');
const {
  loadAnswers,
  answerValidate,
  createAnswer,
  removeAnswer
} = require('../controllers/answers');
const { listPopulerTags, searchTags, listTags } = require('../controllers/tags');
const { upvote, downvote, unvote } = require('../controllers/votes');
const { loadComments, validate, createComment, removeComment } = require('../controllers/comments');

const Authenticate = require('../middleware/authenticate');

const router = require('express').Router();

//authentication
// router.post('/signup', validateUser, signup);
// router.post('/authenticate', validateUser, authenticate);

//users
// router.get('/users', listUsers);
// router.get('/users/:search', search);
// router.get('/user/:username', find);

//questions
router.param('question', loadQuestions);
router.post('/questions', Authenticate, createQuestion);
router.get('/question/:question', show);
router.get('/question', listQuestions);
router.get('/questions/:tags', listByTags);
router.get('/question/user/:username', listByUser);
router.delete('/question/:question', Authenticate, removeQuestion);

//tags
router.get('/tags/populertags', listPopulerTags);
router.get('/tags/:tag', searchTags);
router.get('/tags', listTags);

//answers
router.param('answer', loadAnswers);
router.post('/answer/:question', Authenticate, createAnswer);
router.delete('/answer/:question/:answer', Authenticate, removeAnswer);

//votes
router.get('/votes/upvote/:question/:answer?', Authenticate, upvote);
router.get('/votes/downvote/:question/:answer?', Authenticate, downvote);
router.get('/votes/unvote/:question/:answer?', Authenticate, unvote);

//comments
router.param('comment', loadComments);
router.post('/comment/:question/:answer?', Authenticate, createComment);
router.delete('/comment/:question/:comment', Authenticate, removeComment);
router.delete('/comment/:question/:answer/:comment', Authenticate, removeComment);

module.exports = (app) => {
  app.use('/api', router);

  app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
      message: error.message
    });
  });
};
