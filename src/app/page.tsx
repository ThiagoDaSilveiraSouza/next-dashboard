import { ChangeRouteButton } from "./components";

export default function Home() {
  return (
    <div className="p-4">
      <ChangeRouteButton route="/admin">Admin</ChangeRouteButton>
    </div>
  );
}
