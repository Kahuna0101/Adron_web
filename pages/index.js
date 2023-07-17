//import { getProperties } from "../pages/api/properties/index";
import FeaturedProperties from "@/features/Home/components/FeaturedProperties";
import HeroBanner from "@/features/Home/components/HeroBanner";
import MeetTheTeam from "@/features/Home/components/MeetTheTeam";
import Partners from "@/features/Home/components/Partners";
import Testimonials from "@/features/Home/components/Testimonials";
import DefaultLayout from "@/features/Layouts/DefaultLayout";
import AboutUs from "@/features/Home/components/AboutUs";
import { getProperties } from "./api/properties";

export default function Home({ featuredProperties }) {
 
  return (
    <DefaultLayout>
      <HeroBanner />
      <FeaturedProperties featuredProperties={featuredProperties}/>
      <AboutUs />
      <MeetTheTeam />
      <Testimonials />
    </DefaultLayout>
  );
};



export async function getStaticProps() {
  const data = await getProperties(5);

  return {
      props: {
          featuredProperties: data,
      },
      revalidate: 60,
  };
};