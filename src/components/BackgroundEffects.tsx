export default function BackgroundEffects() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />

        <div className="absolute top-[30%] right-[-100px] w-[400px] h-[400px] bg-fuchsia-500/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-[-100px] left-[20%] w-[450px] h-[450px] bg-violet-500/10 blur-[120px] rounded-full" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_40%)]" />
      </div>
    </>
  );
}