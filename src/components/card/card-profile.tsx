import { ChevronRightIcon } from "@radix-ui/react-icons";

export const CardProfile = () => {
  return (
    <div className="bg-gray-800 py-1 px-3 rounded-sm">
      <h1 className="flex flex-row items-center space-x-2">
        <ChevronRightIcon />
        <p>Hi, My name is Keigo Okamoto.</p>
      </h1>
      <h1 className="mb-1 flex flex-row items-center space-x-2">
        <ChevronRightIcon />
        <p>I`m frontend engineer.</p>
      </h1>
    </div>
  );
};
