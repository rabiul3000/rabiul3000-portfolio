import React from "react";
import { Link, useLocation } from "react-router";
import Container from "../../Components/Container/Container";

const ProjectDetail = () => {
  const { state } = useLocation();
  console.log(state);
  const {
    id,
    name,
    img,
    title,
    techs,
    desc,
    liveLink,
    repoLink,
    challenges,
    plans,
  } = state;
  return (
    <Container>
      <div className='flex mx-auto justify-center items-center  py-24 w-8/12 gap-8 flex-col'>
        <div className="flex w-10/12 items-center">
            <p className="uppercase text-sm text-mod font-semibold">
                <Link to={`/projects`}>projects/</Link>
                <span className="text-slate-400 cursor-pointer">{id}</span>
            </p>
        </div>
        <div className="w-10/12">
          <img src={img} alt='project_img' />
        </div>
        <div className="flex flex-col gap-4 w-10/12">
            <h1 className="text-5xl font-title">{name}</h1>
            <p className="text-lg font-semibold text-gray-500"> {title} </p>
            <p className="flex flex-wrap gap-2">{techs.map((tech) => <span className="badge badge-primary badge-sm"> {tech} </span>)}</p>
          
          <div className="flex gap-2">
            <a href={liveLink} className="btn w-fit btn-wide btn-neutral btn-sm"> Live Demo </a>
            <a href={repoLink} className="btn w-fit btn-neutral btn-sm"> Repository </a>
          </div>
            <p> {desc} </p>
            <h1 className="text-xl border-b border-dashed py-1">🧩 Challenges faced while building <span className="capitalize">{name}:</span></h1>
            <ul>{challenges.map((challenge, index) => <li> {index+1}. {challenge} </li>)}</ul>
            <h1 className="text-xl border-b border-dashed py-1"> ✨Future Plans & Feature Improvements for <span className="capitalize">{name}:</span></h1>
            <ul>{plans.map((plan, index) => <li> {index+1}. {plan} </li>)}</ul>
        </div>
      </div>
    </Container>
  );
};

export default ProjectDetail;
