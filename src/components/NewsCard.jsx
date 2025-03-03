function NewsCard() {
  const news = [
    {
      title: "Hydrogen VS Electric Cars",
      disc: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      disc: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      disc: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <div className="flex flex-col bg-slate-950 text-slate-300 py-8 px-6 gap-1 flex-1 space-y-1">
      <h1 className="font-bold text-4xl text-start text-amber-500">New</h1>
      <div className="flex flex-col gap-[2px] bg-slate-700">
        {news.map((Item) => (
          <div key={Item.title} className="py-4 flex-1 bg-slate-950">
            <h2 className="font-bold text-xl cursor-pointer hover:text-amber-500 duration-200 my-4">
              {Item.title}
            </h2>
            <p className="text-sm">{Item.disc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsCard;
