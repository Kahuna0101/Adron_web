import FeaturedProperties from "@/features/Home/components/FeaturedProperties";
import Hero from "@/features/Home/components/Hero";
import MeetTheTeam from "@/features/Home/components/MeetTheTeam";
import Testimonials from "@/features/Home/components/Testimonials";
import DefaultLayout from "@/features/Layouts/DefaultLayout";
import AboutUs from "@/features/Home/components/AboutUs";
import { getProperties } from "./api/properties";
import { getPosts } from "./api/blogs";
import HeroSlide from "@/features/Home/components/HeroSlide/HeroSlide";

export default function Home({ featuredProperties, promos }) {
  return (
    <DefaultLayout>
      <Hero />
      <HeroSlide promos={promos}/>
      <FeaturedProperties featuredProperties={featuredProperties} />
      <AboutUs />
      <MeetTheTeam />
      <Testimonials />
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const featuredPropertiesData = await getProperties(5);
  const promosData = await getPosts(10);

  return {
    props: {
      featuredProperties: featuredPropertiesData,
      promos: promosData,
    },
    revalidate: 60,
  };
};
