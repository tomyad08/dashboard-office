import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex justify-end bg-white px-5 py-2 rounded-xl mt-5">
      <div className="flex justify-end">
        <div>
          <p className="font-semibold text-lg text-end">Hi, Abdullah.</p>
          <p className="text-sm">
            Don't forget to drink a cup coffee before you start to work.
          </p>
          <p className="text-sm font-semibold text-end">
            Best regard, Jhon Nee.
          </p>
        </div>
        <Image
          src="/Timothy.jpg"
          alt=" "
          width={70}
          height={30}
          className="border rounded-full mx-5"
        />
      </div>
    </div>
  );
};
export default NavBar;
