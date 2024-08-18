import Image from "next/image";
import SocialMedia from "./SocialMedia";
import Section from "./Section";
import Code from "./Code";

const Profil = () => {
  return (
    <Section className="flex flex-col gap-4" id="home">
        <div className="flex flex-col gap-2">
          <p>
            I'm 
            <span className="text-lg md:text-xl font-bold text-primary font-caption">
              {" "}
              Judelin INÉLUS,{" "}
            </span>
          </p>
          <p className="text-muted-foreground font-semibold text-4xl w-full">
            Web and Mobile FrontEnd Developer
          </p>
        </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg md:text-xl">
            Trying to make life easier through my passion.
        </p>
        <SocialMedia />
      </div>
    </Section>
  );
};

export default Profil;
