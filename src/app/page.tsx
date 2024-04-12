import PostsSection from "./../Components/templates/main/PostsSection/PostsSection";
import UsersSection from './../Components/templates/main/UsersSection/UsersSection';
import StoriesSection from './../Components/templates/main/StoriesSection/StoriesSection';
import Navigation from "@/Components/modules/Navigation/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="container">
        <div className="flex my-8">
          <div className="w-0"></div>
          <div className="flex flex-col">
            <StoriesSection />
            <PostsSection />
            <UsersSection />
          </div>
        </div>
      </div>
    </>
  );
}
