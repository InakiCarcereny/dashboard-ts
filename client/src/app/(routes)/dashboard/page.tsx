"use client";

export default function Dashboard() {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="h-[200px] w-[600px] bg-zinc-300 rounded-xl">.</div>

          <div className="h-[200px] w-[600px] bg-zinc-300 rounded-xl">.</div>
        </div>
        <div className="h-[385px] w-[1215px] bg-zinc-300 rounded-xl">.</div>
        <div className="flex gap-4">
          <div className="h-[250px] w-[292px] bg-zinc-300 rounded-xl">.</div>
          <div className="h-[250px] w-[292px] bg-zinc-300 rounded-xl">.</div>
          <div className="h-[250px] w-[292px] bg-zinc-300 rounded-xl">.</div>
          <div className="h-[250px] w-[292px] bg-zinc-300 rounded-xl">.</div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="h-[600px] w-[400px] bg-zinc-300 rounded-xl">.</div>
        <div className="h-[250px] w-[400px] bg-zinc-300 rounded-xl">.</div>
      </div>
    </div>
  );
}
