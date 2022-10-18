type HowItWorksCardInfo = {
    svg: any;
    title: string;
    description: string;
  };

export default function HowItWorksCard({ svg, title, description }: HowItWorksCardInfo) {
  return (
    <div className="w-96 flex flex-col my-8 sm:my-2">
      <div className="flex justify-center">
          {svg}
      </div>
      <div className="text-center my-3">
        <span className="text-base text-white text-bold">{title}</span>
      </div>
      <div>
        <p className="text-center text-base text-white font-sans">
            {description}
        </p>
      </div>
    </div>
  );
}
