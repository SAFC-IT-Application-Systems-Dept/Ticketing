import { AtomButton } from "@/components/atoms";
import { useRouter } from "next/router";

const NotFoundBlock: React.FC = () => {
  const router = useRouter();
  const Back = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 text-center">
      <div className="space-y-6 max-w-md">
        <div className="relative w-64 h-64 mx-auto">
          <svg
            className="absolute inset-0"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#6366F1"
              d="M43.5,-67.2C57.9,-61.8,72.2,-52.3,79.6,-38.7C87,-25,87.5,-7.2,83.8,9.2C80.1,25.5,72.3,40.4,61.3,52.4C50.3,64.4,36.2,73.6,20.7,77.7C5.2,81.8,-11.7,80.8,-27.4,75.8C-43.1,70.8,-57.6,61.7,-67.8,48.9C-78,36,-83.9,19.3,-83.4,3C-82.9,-13.3,-75.9,-29.3,-65.8,-41.7C-55.6,-54.1,-42.3,-63,-28.8,-68.5C-15.3,-74,-1.9,-76.1,11.8,-74.8C25.5,-73.5,39.5,-68.8,43.5,-67.2Z"
              transform="translate(100 100)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-white text-7xl font-bold">
            404
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="text-base text-gray-600">
          Sorry, we couldn't find the page you're looking for. It might have
          been moved or doesn't exist.
        </p>
        <div className="flex justify-center">
          <AtomButton
            type="submit"
            fullWidth
            variant="contained"
            label={"Go Back"}
            onClick={Back}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFoundBlock;
