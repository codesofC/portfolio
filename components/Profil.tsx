
import Image from "next/image";
import SocialMedia from "./SocialMedia";
import Section from "./Section";
import Code from "./Code";

const Profil = () => {

  return (
    <Section className="flex flex-col gap-8" id="home">
      <div 
        className="w-full flex flex-col md:flex-row gap-y-4 gap-x-8 items-center"
      >
        <div className="relative w-32 h-32 rounded-full flex items-center justify-center bg-primary overflow-hidden">
          <Image
            src={"/assets/profil-1.png"}
            width={1200}
            height={1200}
            priority
            alt="profil"
            className="object-contain scale-150 w-full h-full absolute top-4"
          />
        </div>
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="flex flex-col">
            <span> I'm </span>
            <div>
              <span className="text-4xl md:text-6xl font-bold text-primary font-caption">
                {" "}
                Judelin INÉLUS{" "}
              </span>
            </div>
          </div>
          <p className="text-muted-foreground font-semibold">Web and Mobile FrontEnd Developer</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>
          I'm a Developer with Backend Skills for FrontEnd based in <Code>
            Brasil 
            <Image 
              src="https://www.gov.br/mre/pt-br/consulado-washington/consulate-general-of-brazil-in-washington-dc/BandeiradoBrasil.jpg"
              alt="flag"
              width={50}
              height={50}
              className="w-4 inline" 
            />
          </Code>. I really like participating in the transformation of <Code>ideas</Code> into <Code>reality</Code> creating efficient interfaces with excellent user experiences.
        </p>
        <SocialMedia />
      </div>
    </Section>
  );
};

export default Profil;
