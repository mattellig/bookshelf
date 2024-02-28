import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Bookshelf" },
    { name: "description", content: "Welcome to my bookshelf!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Bookshelf</h1>
    </div>
  );
}
