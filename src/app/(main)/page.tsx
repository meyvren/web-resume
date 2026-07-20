import HomePage from "@/components/HomePage";
import { petTimelineData } from "@/data/data";

export default function Home() {
  return (
    <div className="relative">
      <HomePage
        projects={petTimelineData}
      />
    </div>
  );
}
