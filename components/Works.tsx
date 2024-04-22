import { works } from "@/constants/index";
import { Card } from "./ui/card";
import WorkCard from "./WorkCard";

const Works = () => {
  return (
    <div className="-order-1 lg:order-1 lg:col-span-2 flex flex-col gap-6">
      <h1 className="font-bold text-2xl font-mono"> Works </h1>
      <Card className="flex flex-col gap-4 p-4">
        {works.map((work) => (
          <WorkCard key={work.id} {...work} />
        ))}
      </Card>
    </div>
  );
};

export default Works;
