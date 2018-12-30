import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDFAU2wNQuaPOrN10MIaI8RiHKC3amjwzg",
  authDomain: "foodie-f2a16.firebaseapp.com",
  databaseURL: "https://foodie-f2a16.firebaseio.com",
  projectId: "foodie-f2a16",
  storageBucket: "foodie-f2a16.appspot.com",
  messagingSenderId: "283200990093"
};
firebase.initializeApp(config);

export default firebase;