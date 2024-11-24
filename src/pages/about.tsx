import { Button, Card, CardFooter, Image, Link } from "@nextui-org/react";
import { LucideGithub, LucideLinkedin } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

export default function About() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [userTheme, setUserTheme] = useState("light");
  const { setTheme, theme } = useTheme();

  const music = useMemo(() => new Audio("/music.mp3"), []);

  useEffect(() => {
    if (isPlaying) music.pause();
    else music.play();
  }, [isPlaying, music]);

  useEffect(() => {
    setUserTheme(theme!);
  }, []);

  useEffect(() => {
    setTheme("dark");

    return () => setTheme(userTheme);
  }, [userTheme, setTheme]);

  return (
    <>
      <div className="container max-w-5xl">
        <div className="grid grid-cols-12 gap-5 place-items-center h-screen -mt-20">
          <div className="col-span-12 md:col-span-8">
            <div className="grid gap-5">
              <h2 className="text-3xl font-extrabold">MAHİR BERAT MENTEŞ</h2>
              <h4 className="text-lg font-bold">Software Developer</h4>
              <p>
                Hello! I am Berat. I am currently a first-year Computer
                Engineering student at Pamukkale University and started
                improving my software development skills as of November 2023. So
                far, I have learned the C programming language and continue to
                enhance my JavaScript skills. I am currently focusing on
                improving my knowledge of HTML, CSS, and JavaScript.
                Additionally, I am improving my skills in Python and aiming to
                advance in the field of artificial intelligence. Feel free to
                contact me if you would like to learn more.
              </p>
              <h4 className="text-lg font-bold">Mahir Berat Menteş</h4>
              <div className="flex gap-5">
                <Button
                  as={Link}
                  href="https://github.com/beratmentess"
                  isIconOnly
                  variant="light"
                >
                  <LucideGithub />
                </Button>{" "}
                <Button
                  as={Link}
                  href="https://www.linkedin.com/in/mahir-berat-mente%C5%9F-34649b1b0/"
                  isIconOnly
                  variant="light"
                >
                  <LucideLinkedin />
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="grid gap-5">
              <Card className="border-none" isFooterBlurred radius="lg">
                <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  height={200}
                  src="/music-bg.jpg"
                  width={200}
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-tiny text-white/80">Listen and Relax</p>
                  <Button
                    className="text-tiny text-white bg-black/20"
                    color="default"
                    onPress={() => setIsPlaying(!isPlaying)}
                    radius="lg"
                    size="sm"
                    variant="shadow"
                  >
                    <strong>{isPlaying ? "Play" : "Pause"}</strong>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="col-span-12">
            <ul className="grid gap-3">
              <li className="flex justify-between gap-3">
                <strong>E-mail</strong>
                <Link
                  color="foreground"
                  href="mailto:softwrdevelpr07@gmail.com"
                >
                  softwrdevelpr07@gmail.com
                </Link>
              </li>
              <li className="flex justify-between gap-3">
                <strong>My CV</strong>
                <Link color="foreground" href={"/my-cv.pdf"} isExternal>
                  Download
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="radial-bg fixed top-0 left-0 w-full h-full -z-10"></div>
    </>
  );
}
