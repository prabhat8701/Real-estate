import express from "express";
import { bookVisit, cancelBooking, createUser,getAllBookings, getAllFavorites, toFav } from "../controllers/userCntrl.js";
const router =  express.Router() 
router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/removeBooking/:id", cancelBooking);
router.post("/tofav/:rid", toFav);
router.post("/favResd", getAllFavorites);

export {router as userRoute}