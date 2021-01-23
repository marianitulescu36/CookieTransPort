const router = require("express").Router();
const userController = require('../controllers/users');
const transportTypeController = require('../controllers/transportType')
const reviewsController = require('../controllers/reviews')
const verifyAuth = require('../controllers/middlewares').verifyToken;
const Review = require("../models").Reviews;

router.post('/register', userController.registerUser);

// ruta login user
router.post('/login', userController.login);

router.put('/resetpassword', userController.resetPassword);

// REVIEWS

//creaza o noua recenzie
router.post('/reviews', verifyAuth, reviewsController.createReview);

//selecteaza toate recenziile
router.get('/reviews', reviewsController.getAllReviews);

//editeaza o recenzie
router.put('/reviews/:id', verifyAuth, reviewsController.updateReview);

//selecteaza recenziile user-ului respectiv
router.get('/reviews/user/:id', reviewsController.getReviewsByUserId);

//selecteaza o recenzie in functie de id-ul tipului de transport
router.get('/reviews/transport-type/:id', reviewsController.getReviewsByTransportTypeId);

//sterge o recenzie in functie de id
router.delete('/reviews/:id', reviewsController.deleteReviewById);

//selecteaza recenzia dupa id
router.get('/reviews/:id', reviewsController.getReviewById);

// TRANSPORT-TYPE

//selecteaza toate tipurile de transport
router.get('/transport-type', transportTypeController.getAllTransportTypes);
//creaza un nou tip de transport
router.post('/transport-type', transportTypeController.createTransportType);


router.get('/transport-type/:id', transportTypeController.getTranportTypeById);
router.get('/transport-type/type/:type', transportTypeController.getAllTranportTypesByType);


module.exports = router;