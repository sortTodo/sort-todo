import { IconSquare, IconPencilSquare } from 'components/icons';

export default function App() {
  const handleToggleButtonClicked = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    alert('toggle clicked');
  };

  const handleCardClicked = () => {
    // alert('card clicked');
  };

  return (
    <main className="max-w-screen-sm mx-auto">
      <h1 className="text-3xl font-bold py-4 mt-0 mb-4 sm:my-2 sm:px-0 px-2 sm:bg-transparent bg-gray-500 bg-opacity-10">
        Sort Tasks
      </h1>
      <div
        className="border-y border-gray-700 pl-2 pr-4 p-2 flex space-x-2 items-center bg-gray-400  hover:bg-gray-100 bg-opacity-10 hover:bg-opacity-10 active:bg-gray-500 active:bg-opacity-10 sm:rounded-md sm:border-x"
        role="button"
        onClick={handleCardClicked}
      >
        <button
          type="button"
          onClick={handleToggleButtonClicked}
          className="rounded-full w-10 h-10 inline-flex items-center justify-center hover:cursor-pointer hover:bg-gray-100 hover:bg-opacity-10 active:bg-gray-500 active:bg-opacity-10"
        >
          <IconSquare />
        </button>
        <div className="flex-grow">
          <h3 className="w-full text-base">Nome</h3>
          <p className="text-sm text-opacity-50 text-white">Category</p>
        </div>
        <div>
          <IconPencilSquare />
        </div>
      </div>
    </main>
  );
}
