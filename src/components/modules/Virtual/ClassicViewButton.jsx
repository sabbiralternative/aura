const ClassicViewButton = ({ isClassicView, setIsClassicView }) => {
  return (
    <div className="flex absolute top-0 right-0 gap-2 justify-center items-center p-1 pl-3 bg-gradient-to-l to-transparent -translate-y-full from-zinc-900 via-zinc-900">
      <span className="text-white">Classic View</span>
      <div
        onClick={() => setIsClassicView((prev) => !prev)}
        className={`relative w-8 h-5 rounded-full cursor-pointer transition-colors duration-200 ease-in-out
          ${isClassicView ? "bg-green-500" : "bg-zinc-700"}
        undefined`}
      >
        <div
          className={`absolute w-4 h-4 rounded-full top-0.5 transition-transform duration-200 ease-in-out
            ${isClassicView ? "bg-zinc-100 translate-x-3.5" : "translate-x-0.5 bg-zinc-400"}`}
        />
      </div>
    </div>
  );
};

export default ClassicViewButton;
