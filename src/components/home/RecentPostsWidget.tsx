import { getAllPosts } from "@/lib/posts";
import DraggableWidget from "./DraggableWidget";

const RecentPostsWidget = () => {
  const posts = getAllPosts().slice(0, 5);
  return <DraggableWidget posts={posts} />;
};

export default RecentPostsWidget;
