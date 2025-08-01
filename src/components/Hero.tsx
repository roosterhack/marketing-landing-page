import { CircleCheck } from 'lucide-react';

import heroImg from '../assets/hero-img.png';

export const Hero = () => {
  return (
    <section className="hero grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
      <div className="text-left ">
        <h1 className="text-4xl font-bold mb-4">Premium abstract images</h1>
        <ul className="mb-16">
          <li className="flex items-center gap-2 mb-2">
            <CircleCheck />
            Minimum 5K image resolution
          </li>
          <li className="flex items-center gap-2 mb-2">
            <CircleCheck />
            Various format variants available
          </li>
          <li className="flex items-center gap-2 mb-2">
            <CircleCheck />
            Retina display support
          </li>
        </ul>
        <button className="btn-primary mr-4">Get Started</button>
        <button className="btn-secondary">Learn More</button>
      </div>
      <img src={heroImg} alt="" className="w-full " />
    </section>
  );
};
