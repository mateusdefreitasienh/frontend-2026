import PostCard from "@/components/postCard"
import PersonalData from "@/components/PersonalData";

export default function Home() {
  return (
    <div>
      <PostCard
        image="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
        authorPicture="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
        tagsA="Tag A"
        tagsB="Tag B"
        tagsC="Tag C"
        dateText="14, may, 2021"
        title="Title here"
        subtitle="Subtitle here"
        likes="34"
        views="4"
        comments="5"
      />
      <PersonalData></PersonalData>
    </div>
  );
}