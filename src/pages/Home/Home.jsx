import { Bubanim, Hero, Horizon, Newsletter, Skills } from "../../components";
import Stats from "../../components/Stats";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Stats/>
      <Skills></Skills>
      
      <Bubanim />
      <Horizon></Horizon>

      <Newsletter />
    </>
  );
}
