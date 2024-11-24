import { useTheme } from "next-themes";

import { IconCloud } from "@/components/IconCloud";

export default function Index() {
  return (
    <>
      <div className="grid gap-10">
        <Hero />
        <GithubStats />
        <IconCloudDemo />
      </div>
    </>
  );
}

const Hero = () => {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-screen mt-10 -z-10"
        style={{
          backgroundImage: "url('/bg.jpeg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Ensures the image covers the entire div
        }}
      ></div>
      <div className="h-screen mt-20">
        <div className="grid place-items-center h-full -mt-56">
          <div
            className="flex flex-col gap-5 text-white text-center"
            style={{
              textShadow: "2px 2px 5px rgba(0, 0, 0, 1)",
            }}
          >
            <h2 className="text-5xl font-bold">A future without software?</h2>
            <p className="text-3xl font-semibold">That's a fantasy.</p>
          </div>
        </div>
      </div>
    </>
  );
};

const GithubStats = () => {
  const { theme } = useTheme();
  return (
    <img
      alt="Logo"
      className="mx-auto"
      src={`https://github-readme-stats.vercel.app/api?username=beratmentess&show_icons=true&theme=${theme}`}
    />
  );
};

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

function IconCloudDemo() {
  return <IconCloud iconSlugs={slugs} />;
}
