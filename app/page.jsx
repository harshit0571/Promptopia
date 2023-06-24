import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Ai-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open source ai powered prompting tool to discover,
        create and share ai prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
