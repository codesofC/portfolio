import Image from "next/image";
import Section from "./Section";
import ContactCard from "./ContactCard";
import Link from "next/link";
import { ImDownload } from "react-icons/im";
import { contacts } from "@/constants/index";
import Code from "./Code";
import { BorderBeam } from "./ui/border-beam";

const About = () => {
  return (
    <Section
      className="flex flex-col md:flex-row items-center gap-12"
      id="about"
    >
      <div className="relative rounded-md">
        <div className="relative size-72 group">
          <Image
            src={"/assets/profil-2.jpg"}
            width={900}
            height={600}
            priority
            alt="Profil"
            className="w-full h-full object-cover rounded-md transition-all duration-500 grayscale hover:grayscale-0"
          />
        </div>
        <BorderBeam size={75} borderWidth={2} />
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-2xl font-mono"> About Me </h1>
        <div className="text-justify">
          <p>
            Hi! I'm Judelin, a developer who enjoys working on innovative
            projects and living in <Code>Brazil</Code>. With the goal of becoming a tech lead
            and managing large-scale projects, I'm committed to continuous
            learning and growth.
            <br />
            <br />
            My family is the most important thing to me in this world.
            <br />
            <br />
          </p>
          <div>
            When I'm not coding, I like to listen to music, podcasts,
            audiobooks. My most used applications are: <br />
            <div className="flex flex-wrap mt-4 gap-x-2 gap-y-1">
              {appsFavorite.map((app, _i) => (
                <Code key={_i} className="text-xs">
                  <Image
                    src={app.logo}
                    alt="flag"
                    width={50}
                    height={50}
                    className="w-4 inline"
                  />
                  {app.name}
                </Code>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-end gap-3 sm:gap-6">
          <Link
            href="/assets/JudelincvEN.pdf"
            className="bg-primary py-2 px-4 font-bold flex items-center gap-2 rounded-md"
          >
            CV <ImDownload />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default About;

const appsFavorite = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png",
    name: "Spotify",
  },
  {
    logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png",
    name: "VS Code",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/1024px-Google_Chrome_icon_%28September_2014%29.svg.png",
    name: "Google Chrome",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    name: "Notion",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png",
    name: "WhatsApp",
  },
  {
    logo: "https://cdn.icon-icons.com/icons2/294/PNG/256/Clock_31089.png",
    name: "Clock",
  },
];
