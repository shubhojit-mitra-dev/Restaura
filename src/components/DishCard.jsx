const DishCard = ({ project }) => {
  return (
    <div className="">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-3xl p-2 transition-transform duration-300 ease-in-out sm:hover:scale-125"
      />
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-bold tracking-tighter">
          {project.title}
        </h3>
        <p className="text-sm">{project.description}</p>
      </div>
    </div>
  );
};

export default DishCard;