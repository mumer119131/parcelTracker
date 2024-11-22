import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="text-center flex items-center justify-center h-screen flex-col">
      <h1 className="text-small">This is the homepage</h1>
      <Button>Hello</Button>
    </div>
  );
}
