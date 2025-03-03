import React from "react";

function Card(props) {
  return (
    <div className="flex flex-1 gap-4 shadow-md">
      <img className="w-30 h-30" src={props.img} alt="" />
      <div className="gap-3 w-[240px]">
        <h2 className="text-3xl text-red-400 font-bold">{props.title}</h2>
        <h3 className="text-lg text-slate-900 font-bold">{props.subtitle}</h3>
        <p className="text-slate-500">{props.disc}</p>
      </div>
    </div>
  );
}

export default Card;
