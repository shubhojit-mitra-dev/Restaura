import { REVIEW } from "../constants";
import shwetabh from "../assets/shwetabh.jpeg";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";

const Review = () => {
  return (
    <section className="container p-10 mx-auto mb-8 mt-12" id="review">
      <div className="flex flex-col justify-center items-center">
      <div className="my-8 mb-16 sm:text-neutral-400 text-lg max-w-3xl sm:text-4xl flex flex-wrap">
            {REVIEW.content.split(' ').map((word, wordIndex) => (
                <div key={wordIndex} className="flex mr-1 sm:mr-2 sm:pt-2 scale-hover-span sm:hover:text-white">
                {[...word].map((letter, letterIndex) => (
                    <span 
                    key={`${wordIndex}-${letterIndex}`} 
                    className='h-9'
                    >
                    {letter}
                    </span>
                ))}
                </div>
            ))}
        </div>
        <div className="flex items-center justify-center gap-6 scale-hover">
          <img
            src={shwetabh}
            width={80}
            height={80}
            alt={REVIEW.name}
            className="rounded-full border"
          />
          <div className="">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <div className="relative w-full overflow-x-auto scrollbar-hide">
          <div
            className="flex lg:grid lg:grid-cols-4 gap-6 pb-4 mx-auto lg:justify-center"
            style={{ 
              width: "fit-content",
              margin: "0 auto",
              padding: "0 1rem"
            }}
          >
            {[customer1, customer2, customer3, customer4].map(
              (customer, index) => (
                <div key={index} 
                    className="flex-shrink-0 scale-hover h-fit">
                  <img
                    src={customer}
                    alt={`customer-${index + 1}`}
                    className="h-[300px] w-[200px] rounded-3xl sm:rounded-br-3xl sm:rounded-tl-3xl object-cover"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
