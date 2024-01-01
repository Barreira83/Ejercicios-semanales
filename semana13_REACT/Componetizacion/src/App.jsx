import Post from "./components/Post.jsx";
import './App.css';

const instaPost = {
  id: 1,
  name: "patata,",
  img: "./mono.jpeg",
  coments: [
    { id: 1, text: "genial" },
    { id: 2, text: "fantastico" },
    { id: 3, text: "divertido" },
  ],
  shares: {
    like: true,
    favorite: false  
  },
  counterLikes: 10,
  date: "22-12-2023",
};

const App = () => {
  return (
    <>
      <Post post={instaPost} />
    </>
  );
};

export default App;
