import type { Route } from "./+types/home";
import Main from './home/main/main';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Das Handbuch" },
    { name: "description", content: "Welcome to my handbook" },
  ];
}

export default function Home() {
  return <Main />;
}
