import { REVIEW } from "../constants";
import shwetabh from "../assets/shwetabh.jpeg";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";

const Review = () => {
  return (
    <section className="container p-10 mx-auto mb-8 mt-12" id="review">
      <div className="flex flex-col">
        <p
          className="mb-10 text-xl font-light leading-normal tracking-tight lg:mx-40 lg:mt-40 lg:text-[3.5rem]"
        >
          {REVIEW.content}
        </p>
        <div className="flex items-center justify-center gap-6">
        <img src={shwetabh} width={80} height={80} alt={REVIEW.name} className="rounded-full border" />
        <div className="">
        <h6>{REVIEW.name}</h6>
        <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
        </div>
        </div>
      </div>
      <div className="mt-14">
        <div className="relative w-full overflow-x-auto md:overflow-x-visible">
            <div className="flex gap-4 md:justify-center md:flex-wrap pb-4 md:pb-0" 
                style={{ width: 'max-content', padding: '0 1rem' }}>
            {[customer1, customer2, customer3, customer4].map((customer, index) => (
                <div key={index} className="flex-shrink-0">
                <img 
                    src={customer} 
                    alt={`customer-${index + 1}`} 
                    className="h-[300px] w-[200px] rounded-3xl md:rounded-br-3xl md:rounded-tl-3xl object-cover"
                />
                </div>
            ))}
            </div>
        </div>
        </div>
    </section>
  );
};

export default Review;
