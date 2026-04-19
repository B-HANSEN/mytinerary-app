export interface City {
  _id: string;
  city: string;
  img: string;
}

export interface Itinerary {
  _id: string;
  title: string;
  username: string;
  profilePic: string;
  rating: number;
  duration: number;
  price: string;
  hashtag: string;
  cityId: string;
}

export interface Activity {
  _id: string;
  actPic: string;
  actPlace: string;
  itinId: string;
}

export interface CommentUser {
  username: string;
  profilePic: string;
}

export interface Comment {
  _id: string;
  text: string;
  user: CommentUser;
  itinId: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  favorites: string[];
}
