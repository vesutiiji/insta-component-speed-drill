import InstaPost from "./components/InstaPost";
import "./App.css";

function App() {
  const MainUser = {
    username: "vesutiiji",
    location: "Allentown, PA",
    image:
      "http://1.bp.blogspot.com/-N9Ipb6NmYVs/Us8Xg5Uqq4I/AAAAAAAAGY4/D9P_nE4ARAo/s1600/_chest_bra_cleavage_skirts_baseball_aki_hoshino_asians_skirt_pitcher_asian_desktop_1447x1000_wallpaper-311549.jpg",
  };

  const UserComments = [
    {
      username: "davithedork",
      comment: "ew I don’t like oppai",
      likes: "-24",
    },
    {
      username: "alejandroG",
      comment: "yeah bro, I don’t like oppai. I like chippai and chinpo",
      likes: "-3212789312",
    },
    {
      username: "vesutiiji",
      comment: "boys... relax...",
      likes: "10000",
    },
  ];

  const CommentReply = [
    {
      username: "davithedork",
      comment: "bro, i like boobs just not wholesome boobies.",
      likes: "49",
    },
    {
      username: "alejandroG",
      comment: "bros, i don't care about oppai or chippai, i just love chinko",
      likes: "6515218",
    },
    {
      username: "vesutiiji",
      comment: "bros, again, relax",
      likes: "-552",
    },
  ];

  return (
    <InstaPost
      MainUser={MainUser}
      UserComments={UserComments}
      CommentReply={CommentReply}
    />
  );
}

export default App;
